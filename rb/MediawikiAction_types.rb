# frozen_string_literal: true

# Typed models for the MediawikiAction SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Api entity data model.
#
# @!attribute [rw] batchcomplete
#   @return [String, nil]
#
# @!attribute [rw] continue
#   @return [Hash, nil]
#
# @!attribute [rw] edit
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Hash, nil]
#
# @!attribute [rw] login
#   @return [Hash, nil]
#
# @!attribute [rw] query
#   @return [Hash, nil]
Api = Struct.new(
  :batchcomplete,
  :continue,
  :edit,
  :error,
  :login,
  :query,
  keyword_init: true
)

# Request payload for Api#load.
#
# @!attribute [rw] batchcomplete
#   @return [String, nil]
#
# @!attribute [rw] continue
#   @return [Hash, nil]
#
# @!attribute [rw] edit
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Hash, nil]
#
# @!attribute [rw] login
#   @return [Hash, nil]
#
# @!attribute [rw] query
#   @return [Hash, nil]
ApiLoadMatch = Struct.new(
  :batchcomplete,
  :continue,
  :edit,
  :error,
  :login,
  :query,
  keyword_init: true
)

# Request payload for Api#create.
#
# @!attribute [rw] batchcomplete
#   @return [String, nil]
#
# @!attribute [rw] continue
#   @return [Hash, nil]
#
# @!attribute [rw] edit
#   @return [Hash, nil]
#
# @!attribute [rw] error
#   @return [Hash, nil]
#
# @!attribute [rw] login
#   @return [Hash, nil]
#
# @!attribute [rw] query
#   @return [Hash, nil]
ApiCreateData = Struct.new(
  :batchcomplete,
  :continue,
  :edit,
  :error,
  :login,
  :query,
  keyword_init: true
)

