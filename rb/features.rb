# MediawikiAction SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MediawikiActionFeatures
  def self.make_feature(name)
    case name
    when "base"
      MediawikiActionBaseFeature.new
    when "test"
      MediawikiActionTestFeature.new
    else
      MediawikiActionBaseFeature.new
    end
  end
end
