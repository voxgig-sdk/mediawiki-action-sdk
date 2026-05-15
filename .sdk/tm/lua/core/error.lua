-- MediawikiAction SDK error

local MediawikiActionError = {}
MediawikiActionError.__index = MediawikiActionError


function MediawikiActionError.new(code, msg, ctx)
  local self = setmetatable({}, MediawikiActionError)
  self.is_sdk_error = true
  self.sdk = "MediawikiAction"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MediawikiActionError:error()
  return self.msg
end


function MediawikiActionError:__tostring()
  return self.msg
end


return MediawikiActionError
