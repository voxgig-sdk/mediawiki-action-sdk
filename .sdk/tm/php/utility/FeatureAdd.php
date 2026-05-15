<?php
declare(strict_types=1);

// MediawikiAction SDK utility: feature_add

class MediawikiActionFeatureAdd
{
    public static function call(MediawikiActionContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
