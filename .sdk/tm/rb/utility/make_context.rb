# MediawikiAction SDK utility: make_context
require_relative '../core/context'
module MediawikiActionUtilities
  MakeContext = ->(ctxmap, basectx) {
    MediawikiActionContext.new(ctxmap, basectx)
  }
end
