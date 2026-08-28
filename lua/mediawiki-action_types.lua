-- Typed models for the MediawikiAction SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Api
---@field batchcomplete? string
---@field continue? table
---@field edit? table
---@field error? table
---@field login? table
---@field query? table

---@class ApiLoadMatch
---@field action string
---@field continue? string
---@field format? string
---@field limit? number
---@field list? string
---@field meta? string
---@field pageid? string
---@field prop? string
---@field redirect? boolean
---@field search? string
---@field title? string

---@class ApiCreateData
---@field batchcomplete? string
---@field continue? table
---@field edit? table
---@field error? table
---@field login? table
---@field query? table

local M = {}

return M
