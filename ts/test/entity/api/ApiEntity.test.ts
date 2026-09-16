

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MediawikiActionSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEDIAWIKI_ACTION_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEDIAWIKI_ACTION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MediawikiActionSDK.test()
    const ent = testsdk.Api()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEDIAWIKI_ACTION_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"batchcomplete","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"continue","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"edit","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"error","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"name":"login","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"query","req":false,"type":"`$OBJECT`","index$":5}],"name":"api","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api.php","json":"{\"operationId\":\"executeActionPost\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/x-www-form-urlencoded\":{\"schema\":{\"properties\":{\"action\":{\"description\":\"The action to perform\",\"enum\":[\"login\",\"edit\",\"delete\",\"move\",\"rollback\",\"upload\",\"patrol\",\"purge\"],\"type\":\"string\"},\"format\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\",\"php\"],\"type\":\"string\"},\"lgname\":{\"description\":\"Username for login action\",\"type\":\"string\"},\"lgpassword\":{\"description\":\"Password for login action\",\"type\":\"string\"},\"lgtoken\":{\"description\":\"Login token\",\"type\":\"string\"},\"summary\":{\"description\":\"Edit summary\",\"type\":\"string\"},\"text\":{\"description\":\"Page content\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the page to edit\",\"type\":\"string\"},\"token\":{\"description\":\"CSRF token for authentication\",\"type\":\"string\"}},\"required\":[\"action\"],\"type\":\"object\"}},\"multipart/form-data\":{\"schema\":{\"properties\":{\"action\":{\"enum\":[\"upload\"],\"type\":\"string\"},\"file\":{\"description\":\"File to upload\",\"format\":\"binary\",\"type\":\"string\"},\"filename\":{\"description\":\"Target filename\",\"type\":\"string\"},\"format\":{\"default\":\"json\",\"type\":\"string\"},\"token\":{\"description\":\"CSRF token\",\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"editSuccess\":{\"summary\":\"Successful edit\",\"value\":{\"edit\":{\"newrevid\":67890,\"pageid\":12345,\"result\":\"Success\",\"title\":\"Example Page\"}}},\"loginSuccess\":{\"summary\":\"Successful login\",\"value\":{\"login\":{\"lguserid\":12345,\"lgusername\":\"ExampleUser\",\"result\":\"Success\"}}}},\"schema\":{\"properties\":{\"edit\":{\"properties\":{\"newrevid\":{\"type\":\"integer\"},\"pageid\":{\"type\":\"integer\"},\"result\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"info\":{\"type\":\"string\"}},\"type\":\"object\"},\"login\":{\"properties\":{\"lguserid\":{\"type\":\"integer\"},\"lgusername\":{\"type\":\"string\"},\"result\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"info\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"info\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Forbidden - insufficient permissions\"}},\"security\":[{\"cookieAuth\":[]}],\"securitySchemes\":{\"cookieAuth\":{\"description\":\"Session cookie obtained after successful login\",\"in\":\"cookie\",\"name\":\"session\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api.php","segments":[{"lit":"api.php"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"action","orig":"action","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"continue","orig":"continue","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"list","orig":"list","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"meta","orig":"meta","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"pageid","orig":"pageid","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"prop","orig":"prop","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"redirect","orig":"redirect","reqd":false,"type":"`$BOOLEAN`","index$":8},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$STRING`","index$":9},{"active":true,"kind":"query","name":"title","orig":"title","reqd":false,"type":"`$STRING`","index$":10}]},"contract":{"id":"GET /api.php","json":"{\"operationId\":\"executeAction\",\"parameters\":[{\"description\":\"The action to perform\",\"in\":\"query\",\"name\":\"action\",\"required\":true,\"schema\":{\"enum\":[\"query\",\"login\",\"parse\",\"opensearch\",\"edit\",\"delete\",\"move\",\"rollback\",\"upload\",\"emailuser\",\"watch\",\"patrol\",\"purge\",\"help\"],\"type\":\"string\"}},{\"description\":\"The format of the output\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\",\"php\",\"yaml\",\"rawfm\",\"jsonfm\",\"xmlfm\"],\"type\":\"string\"}},{\"description\":\"A list of titles to work on (for query action)\",\"in\":\"query\",\"name\":\"titles\",\"schema\":{\"type\":\"string\"}},{\"description\":\"A list of page IDs to work on\",\"in\":\"query\",\"name\":\"pageids\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Which properties to get for the queried pages\",\"in\":\"query\",\"name\":\"prop\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Which lists to get\",\"in\":\"query\",\"name\":\"list\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Which metadata to get\",\"in\":\"query\",\"name\":\"meta\",\"schema\":{\"enum\":[\"siteinfo\",\"userinfo\",\"allmessages\",\"tokens\"],\"type\":\"string\"}},{\"description\":\"Search for page titles or text matching this value\",\"in\":\"query\",\"name\":\"search\",\"schema\":{\"type\":\"string\"}},{\"description\":\"How many results to return\",\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"default\":10,\"type\":\"integer\"}},{\"description\":\"Continue token for pagination\",\"in\":\"query\",\"name\":\"continue\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Automatically resolve redirects\",\"in\":\"query\",\"name\":\"redirects\",\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"queryPage\":{\"summary\":\"Query page information\",\"value\":{\"batchcomplete\":\"\",\"query\":{\"pages\":{\"15580374\":{\"extract\":\"Wikipedia is a free online encyclopedia...\",\"ns\":0,\"pageid\":15580374,\"title\":\"Main Page\"}}}}},\"userInfo\":{\"summary\":\"Get user information\",\"value\":{\"batchcomplete\":\"\",\"query\":{\"userinfo\":{\"id\":12345,\"name\":\"ExampleUser\",\"rights\":[\"read\",\"edit\",\"createpage\"]}}}}},\"schema\":{\"properties\":{\"batchcomplete\":{\"type\":\"string\"},\"continue\":{\"additionalProperties\":true,\"type\":\"object\"},\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"info\":{\"type\":\"string\"}},\"type\":\"object\"},\"query\":{\"properties\":{\"pages\":{\"additionalProperties\":{\"properties\":{\"extract\":{\"type\":\"string\"},\"ns\":{\"type\":\"integer\"},\"pageid\":{\"type\":\"integer\"},\"revisions\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"object\"},\"search\":{\"items\":{\"properties\":{\"ns\":{\"type\":\"integer\"},\"pageid\":{\"type\":\"integer\"},\"snippet\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"userinfo\":{\"properties\":{\"anon\":{\"type\":\"boolean\"},\"id\":{\"type\":\"integer\"},\"name\":{\"type\":\"string\"},\"rights\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"info\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"notloggedin\",\"type\":\"string\"},\"info\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized - authentication required\"}},\"securitySchemes\":{\"cookieAuth\":{\"description\":\"Session cookie obtained after successful login\",\"in\":\"cookie\",\"name\":\"session\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api.php","segments":[{"lit":"api.php"}],"select":{"exist":["action","continue","format","limit","list","meta","pageid","prop","redirect","search","title"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api","name__orig":"api","Name":"Api","name_":"api","name-":"api","NAME":"API","index$":0}, {"active":true,"entity":"api","key$":"BasicApiFlow","kind":"basic","name":"BasicApiFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"api_ref01","srcdatavar":"api_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_ref01"}}],"index$":1}]}, 'Api')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_ref01_ent = client.Api()
    let api_ref01_data = setup.data.new.api['api_ref01']

    api_ref01_data = (await api_ref01_ent.create(api_ref01_data)).data()
    assert(null != api_ref01_data)


    // LOAD
    const api_ref01_match_dt0: any = {}
    const api_ref01_data_dt0 = (await api_ref01_ent.load(api_ref01_match_dt0)).data()
    assert(null != api_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api/ApiTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MediawikiActionSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['api01','api02','api03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEDIAWIKI_ACTION_TEST_API_ENTID': idmap,
    'MEDIAWIKI_ACTION_TEST_LIVE': 'FALSE',
    'MEDIAWIKI_ACTION_TEST_EXPLAIN': 'FALSE',
    'MEDIAWIKI_ACTION_APIKEY': '',
  })

  idmap = env['MEDIAWIKI_ACTION_TEST_API_ENTID']

  const live = 'TRUE' === env.MEDIAWIKI_ACTION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEDIAWIKI_ACTION_TEST_API_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MediawikiActionSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.MEDIAWIKI_ACTION_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MEDIAWIKI_ACTION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
