# MediawikiAction SDK utility: prepare_body
module MediawikiActionUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
