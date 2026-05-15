# MediawikiAction SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MediawikiActionUtility.registrar = ->(u) {
  u.clean = MediawikiActionUtilities::Clean
  u.done = MediawikiActionUtilities::Done
  u.make_error = MediawikiActionUtilities::MakeError
  u.feature_add = MediawikiActionUtilities::FeatureAdd
  u.feature_hook = MediawikiActionUtilities::FeatureHook
  u.feature_init = MediawikiActionUtilities::FeatureInit
  u.fetcher = MediawikiActionUtilities::Fetcher
  u.make_fetch_def = MediawikiActionUtilities::MakeFetchDef
  u.make_context = MediawikiActionUtilities::MakeContext
  u.make_options = MediawikiActionUtilities::MakeOptions
  u.make_request = MediawikiActionUtilities::MakeRequest
  u.make_response = MediawikiActionUtilities::MakeResponse
  u.make_result = MediawikiActionUtilities::MakeResult
  u.make_point = MediawikiActionUtilities::MakePoint
  u.make_spec = MediawikiActionUtilities::MakeSpec
  u.make_url = MediawikiActionUtilities::MakeUrl
  u.param = MediawikiActionUtilities::Param
  u.prepare_auth = MediawikiActionUtilities::PrepareAuth
  u.prepare_body = MediawikiActionUtilities::PrepareBody
  u.prepare_headers = MediawikiActionUtilities::PrepareHeaders
  u.prepare_method = MediawikiActionUtilities::PrepareMethod
  u.prepare_params = MediawikiActionUtilities::PrepareParams
  u.prepare_path = MediawikiActionUtilities::PreparePath
  u.prepare_query = MediawikiActionUtilities::PrepareQuery
  u.result_basic = MediawikiActionUtilities::ResultBasic
  u.result_body = MediawikiActionUtilities::ResultBody
  u.result_headers = MediawikiActionUtilities::ResultHeaders
  u.transform_request = MediawikiActionUtilities::TransformRequest
  u.transform_response = MediawikiActionUtilities::TransformResponse
}
