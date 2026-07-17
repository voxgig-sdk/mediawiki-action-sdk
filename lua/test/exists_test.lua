-- MediawikiAction SDK exists test

local sdk = require("mediawiki-action_sdk")

describe("MediawikiActionSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
