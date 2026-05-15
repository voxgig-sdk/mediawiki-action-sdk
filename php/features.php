<?php
declare(strict_types=1);

// MediawikiAction SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MediawikiActionFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MediawikiActionBaseFeature();
            case "test":
                return new MediawikiActionTestFeature();
            default:
                return new MediawikiActionBaseFeature();
        }
    }
}
