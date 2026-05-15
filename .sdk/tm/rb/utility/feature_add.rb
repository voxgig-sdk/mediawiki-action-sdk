# MediawikiAction SDK utility: feature_add
module MediawikiActionUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
