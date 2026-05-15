<?php
declare(strict_types=1);

// MediawikiAction SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MediawikiActionMakeContext
{
    public static function call(array $ctxmap, ?MediawikiActionContext $basectx): MediawikiActionContext
    {
        return new MediawikiActionContext($ctxmap, $basectx);
    }
}
