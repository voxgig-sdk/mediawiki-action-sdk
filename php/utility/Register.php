<?php
declare(strict_types=1);

// MediawikiAction SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

MediawikiActionUtility::setRegistrar(function (MediawikiActionUtility $u): void {
    $u->clean = [MediawikiActionClean::class, 'call'];
    $u->done = [MediawikiActionDone::class, 'call'];
    $u->make_error = [MediawikiActionMakeError::class, 'call'];
    $u->feature_add = [MediawikiActionFeatureAdd::class, 'call'];
    $u->feature_hook = [MediawikiActionFeatureHook::class, 'call'];
    $u->feature_init = [MediawikiActionFeatureInit::class, 'call'];
    $u->fetcher = [MediawikiActionFetcher::class, 'call'];
    $u->make_fetch_def = [MediawikiActionMakeFetchDef::class, 'call'];
    $u->make_context = [MediawikiActionMakeContext::class, 'call'];
    $u->make_options = [MediawikiActionMakeOptions::class, 'call'];
    $u->make_request = [MediawikiActionMakeRequest::class, 'call'];
    $u->make_response = [MediawikiActionMakeResponse::class, 'call'];
    $u->make_result = [MediawikiActionMakeResult::class, 'call'];
    $u->make_point = [MediawikiActionMakePoint::class, 'call'];
    $u->make_spec = [MediawikiActionMakeSpec::class, 'call'];
    $u->make_url = [MediawikiActionMakeUrl::class, 'call'];
    $u->param = [MediawikiActionParam::class, 'call'];
    $u->prepare_auth = [MediawikiActionPrepareAuth::class, 'call'];
    $u->prepare_body = [MediawikiActionPrepareBody::class, 'call'];
    $u->prepare_headers = [MediawikiActionPrepareHeaders::class, 'call'];
    $u->prepare_method = [MediawikiActionPrepareMethod::class, 'call'];
    $u->prepare_params = [MediawikiActionPrepareParams::class, 'call'];
    $u->prepare_path = [MediawikiActionPreparePath::class, 'call'];
    $u->prepare_query = [MediawikiActionPrepareQuery::class, 'call'];
    $u->result_basic = [MediawikiActionResultBasic::class, 'call'];
    $u->result_body = [MediawikiActionResultBody::class, 'call'];
    $u->result_headers = [MediawikiActionResultHeaders::class, 'call'];
    $u->transform_request = [MediawikiActionTransformRequest::class, 'call'];
    $u->transform_response = [MediawikiActionTransformResponse::class, 'call'];
});
