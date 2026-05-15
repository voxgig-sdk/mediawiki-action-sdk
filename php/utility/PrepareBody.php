<?php
declare(strict_types=1);

// MediawikiAction SDK utility: prepare_body

class MediawikiActionPrepareBody
{
    public static function call(MediawikiActionContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
