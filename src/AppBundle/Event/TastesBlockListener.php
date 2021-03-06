<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace AppBundle\Event;

use eZ\Publish\API\Repository\ContentService;
use eZ\Publish\API\Repository\LocationService;
use eZ\Publish\API\Repository\SearchService;
use eZ\Publish\API\Repository\Values\Content\Location;
use EzSystems\EzPlatformPageFieldType\Event\BlockResponseEvent;
use EzSystems\EzPlatformPageFieldType\Event\BlockResponseEvents;
use EzSystems\EzPlatformPageFieldType\FieldType\Page\Block\Renderer\BlockRenderEvents;
use EzSystems\EzPlatformPageFieldType\FieldType\Page\Block\Renderer\Event\PreRenderEvent;
use EzSystems\PlatformHttpCacheBundle\Handler\TagHandler;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use eZ\Publish\API\Repository\Values\Content\Query;
use eZ\Publish\API\Repository\Values\Content\Query\Criterion;

class TastesBlockListener implements EventSubscriberInterface
{
    /** @var \eZ\Publish\API\Repository\ContentService */
    private $contentService;

    /** @var \eZ\Publish\API\Repository\LocationService */
    private $locationService;

    /** @var \eZ\Publish\API\Repository\SearchService */
    private $searchService;

    /** @var \EzSystems\PlatformHttpCacheBundle\Handler\TagHandler */
    private $tagHandler;

    /**
     * @param \eZ\Publish\API\Repository\ContentService $contentService
     * @param \eZ\Publish\API\Repository\LocationService $locationService
     * @param \eZ\Publish\API\Repository\SearchService $searchService
     * @param \EzSystems\PlatformHttpCacheBundle\Handler\TagHandler $tagHandler
     */
    public function __construct(
        ContentService $contentService,
        LocationService $locationService,
        SearchService $searchService,
        TagHandler $tagHandler
    ) {
        $this->contentService = $contentService;
        $this->locationService = $locationService;
        $this->searchService = $searchService;
        $this->tagHandler = $tagHandler;
    }

    /**
     * @return array The event names to listen to
     */
    public static function getSubscribedEvents(): array
    {
        return [
            BlockRenderEvents::getBlockPreRenderEventName('tastes') => 'onBlockPreRender',
            BlockResponseEvents::getBlockResponseEventName('tastes') => 'onBlockResponse'
        ];
    }

    /**
     * @param \EzSystems\EzPlatformPageFieldType\FieldType\Page\Block\Renderer\Event\PreRenderEvent $event
     *
     * @throws \eZ\Publish\API\Repository\Exceptions\InvalidArgumentException
     * @throws \eZ\Publish\API\Repository\Exceptions\NotFoundException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
     */
    public function onBlockPreRender(PreRenderEvent $event): void
    {
        $blockValue = $event->getBlockValue();

        $renderRequest = $event->getRenderRequest();

        $parameters = $renderRequest->getParameters();

        $contentIdAttribute = $blockValue->getAttribute('contentId');
        $location = $this->loadLocationByContentId((int) $contentIdAttribute->getValue());

        $contentArray = $this->findContentItems($location, (int) $blockValue->getAttribute('limit')->getValue());

        $parameters['contentArray'] = $contentArray;
        $parameters['location'] = $location;

        $renderRequest->setParameters($parameters);
    }

    /**
     * @param \EzSystems\EzPlatformPageFieldType\Event\BlockResponseEvent $event
     */
    public function onBlockResponse(BlockResponseEvent $event): void
    {
        $response = $event->getResponse();
        $blockValue = $event->getBlockValue();
        $contentIdAttribute = $blockValue->getAttribute('contentId');

        if (null === $contentIdAttribute) {
            return;
        }

        try {
            $contentId = (int) $contentIdAttribute->getValue();
            $location = $this->loadLocationByContentId($contentId);
            $contentItems = $this->findContentItems($location, (int) $blockValue->getAttribute('limit')->getValue());
        } catch (\Exception $e) {
            return;
        }

        $tags = [];
        foreach ($contentItems as $content) {
            $tags[] = 'relation-' . $content->id;
        }

        $this->tagHandler->addTags(array_unique($tags));
        $this->tagHandler->tagResponse($response);
    }

    /**
     * @param Location $location
     * @param int $limit
     *
     * @return \eZ\Publish\API\Repository\Values\Content\Content[]
     *
     * @throws \eZ\Publish\API\Repository\Exceptions\InvalidArgumentException
     */
    private function findContentItems(Location $location, int $limit): array
    {
        $query = new Query();
        $query->query = new Criterion\LogicalAnd(
            [
                new Criterion\ParentLocationId($location->id),
                new Criterion\ContentTypeIdentifier('article'),
                new Criterion\Visibility(Criterion\Visibility::VISIBLE)
            ]
        );

        $query->limit = $limit;

        $searchHits = $this->searchService->findContent($query)->searchHits;

        $contentArray = [];
        foreach ($searchHits as $searchHit) {
            $content = $searchHit->valueObject;
            $contentArray[] = $content;
        }

        return $contentArray;
    }

    /**
     * @param int $contentId
     *
     * @return \eZ\Publish\API\Repository\Values\Content\Location
     *
     * @throws \eZ\Publish\API\Repository\Exceptions\NotFoundException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
     */
    private function loadLocationByContentId(int $contentId): Location
    {
        $contentInfo = $this->contentService->loadContentInfo($contentId);

        return $this->locationService->loadLocation($contentInfo->mainLocationId);
    }
}
