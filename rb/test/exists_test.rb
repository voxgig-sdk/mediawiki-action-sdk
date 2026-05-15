# MediawikiAction SDK exists test

require "minitest/autorun"
require_relative "../MediawikiAction_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MediawikiActionSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
