<?php
declare(strict_types=1);

// MediawikiAction SDK exists test

require_once __DIR__ . '/../mediawikiaction_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MediawikiActionSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
