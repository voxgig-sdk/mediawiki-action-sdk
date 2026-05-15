# ProjectName SDK exists test

import pytest
from mediawikiaction_sdk import MediawikiActionSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MediawikiActionSDK.test(None, None)
        assert testsdk is not None
