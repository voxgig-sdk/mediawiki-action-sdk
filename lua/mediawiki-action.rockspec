package = "voxgig-sdk-mediawiki-action"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/mediawiki-action-sdk.git"
}
description = {
  summary = "MediawikiAction SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["mediawiki-action_sdk"] = "mediawiki-action_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
