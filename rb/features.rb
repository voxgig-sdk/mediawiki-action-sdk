# MediawikiAction SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MediawikiActionFeatures
  def self.make_feature(name)
    case name
    when "base"
      MediawikiActionBaseFeature.new
    when "ratelimit"
      MediawikiActionRatelimitFeature.new
    when "retry"
      MediawikiActionRetryFeature.new
    when "test"
      MediawikiActionTestFeature.new
    when "timeout"
      MediawikiActionTimeoutFeature.new
    else
      MediawikiActionBaseFeature.new
    end
  end
end
