<?php
declare(strict_types=1);

// MediawikiAction SDK utility: result_headers

class MediawikiActionResultHeaders
{
    public static function call(MediawikiActionContext $ctx): ?MediawikiActionResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
