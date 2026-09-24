

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"batchcomplete":{"a":true,"h":"Batchcomplete","n":"batchcomplete","r":false,"t":"`$STRING`","key$":"batchcomplete","index$":0},"continue":{"a":true,"h":"Continue","n":"continue","r":false,"t":"`$OBJECT`","key$":"continue","index$":1},"edit":{"a":true,"h":"Edit","n":"edit","r":false,"t":"`$OBJECT`","key$":"edit","index$":2},"error":{"a":true,"h":"Error","n":"error","r":false,"t":"`$OBJECT`","key$":"error","index$":3},"login":{"a":true,"h":"Login","n":"login","r":false,"t":"`$OBJECT`","key$":"login","index$":4},"query":{"a":true,"h":"Query","n":"query","r":false,"t":"`$OBJECT`","key$":"query","index$":5}},"name":"api","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api.php","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api.php","q":{},"r":{},"s":[{"lit":"api.php"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api.php","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"action","or":"action","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"continue","or":"continue","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"list","or":"list","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"meta","or":"meta","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"pageid","or":"pageid","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"prop","or":"prop","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"redirect","or":"redirect","r":false,"t":"`$BOOLEAN`","index$":8},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"title","or":"title","r":false,"t":"`$STRING`","index$":10}]},"k":"http","m":"GET","o":"/api.php","q":{"exist":["action","continue","format","limit","list","meta","pageid","prop","redirect","search","title"]},"r":{},"s":[{"lit":"api.php"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api","name__orig":"api","Name":"Api","name_":"api","name-":"api","NAME":"API","index$":0}, {"active":true,"entity":"api","key$":"BasicApiFlow","kind":"basic","name":"BasicApiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"api_ref01","srcdatavar":"api_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_ref01"}}],"index$":1}]}, 'Api', {"POST /api.php":{"protocol":"http","operationId":"executeActionPost","requestBody":{"required":true,"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","required":["action"],"properties":{"action":{"type":"string","enum":["login","edit","delete","move","rollback","upload","patrol","purge"],"description":"The action to perform"},"format":{"type":"string","enum":["json","xml","php"],"default":"json"},"title":{"type":"string","description":"Title of the page to edit"},"text":{"type":"string","description":"Page content"},"summary":{"type":"string","description":"Edit summary"},"token":{"type":"string","description":"CSRF token for authentication"},"lgname":{"type":"string","description":"Username for login action"},"lgpassword":{"type":"string","description":"Password for login action"},"lgtoken":{"type":"string","description":"Login token"}}}},"multipart/form-data":{"schema":{"type":"object","properties":{"action":{"type":"string","enum":["upload"]},"filename":{"type":"string","description":"Target filename"},"file":{"type":"string","format":"binary","description":"File to upload"},"token":{"type":"string","description":"CSRF token"},"format":{"type":"string","default":"json"}}}}}},"responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"edit":{"type":"object","properties":{"result":{"type":"string"},"pageid":{"type":"integer"},"title":{"type":"string"},"newrevid":{"type":"integer"}},"key$":"edit"},"login":{"type":"object","properties":{"result":{"type":"string"},"lguserid":{"type":"integer"},"lgusername":{"type":"string"}},"key$":"login"},"error":{"type":"object","properties":{"code":{"type":"string"},"info":{"type":"string"}},"key$":"error"}},"index$":0},"examples":{"editSuccess":{"summary":"Successful edit","value":{"edit":{"result":"Success","pageid":12345,"title":"Example Page","newrevid":67890}}},"loginSuccess":{"summary":"Successful login","value":{"login":{"result":"Success","lguserid":12345,"lgusername":"ExampleUser"}}}}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"object","properties":{"code":{"type":"string"},"info":{"type":"string"}}}}}}}},"403":{"description":"Forbidden - insufficient permissions","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"object","properties":{"code":{"type":"string"},"info":{"type":"string"}}}}}}}}},"parameters":[],"security":[{"cookieAuth":[]}],"securitySource":"operation","securitySchemes":{"cookieAuth":{"type":"apiKey","in":"cookie","name":"session","description":"Session cookie obtained after successful login"}}},"GET /api.php":{"protocol":"http","operationId":"executeAction","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"batchcomplete":{"key$":"batchcomplete","type":"string"},"continue":{"additionalProperties":true,"key$":"continue","type":"object"},"query":{"key$":"query","properties":{"pages":{"additionalProperties":{"properties":{"extract":{"type":"string"},"ns":{"type":"integer"},"pageid":{"type":"integer"},"revisions":{"items":{"type":"object"},"type":"array"},"title":{"type":"string"}},"type":"object"},"type":"object"},"search":{"items":{"properties":{"ns":{"type":"integer"},"pageid":{"type":"integer"},"snippet":{"type":"string"},"title":{"type":"string"}},"type":"object"},"type":"array"},"userinfo":{"properties":{"anon":{"type":"boolean"},"id":{"type":"integer"},"name":{"type":"string"},"rights":{"items":{"type":"string"},"type":"array"}},"type":"object"}},"type":"object"},"error":{"key$":"error","properties":{"code":{"type":"string"},"info":{"type":"string"}},"type":"object"}},"index$":0},"examples":{"queryPage":{"summary":"Query page information","value":{"batchcomplete":"","query":{"pages":{"15580374":{"pageid":15580374,"ns":0,"title":"Main Page","extract":"Wikipedia is a free online encyclopedia..."}}}}},"userInfo":{"summary":"Get user information","value":{"batchcomplete":"","query":{"userinfo":{"id":12345,"name":"ExampleUser","rights":["read","edit","createpage"]}}}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"object","properties":{"code":{"type":"string"},"info":{"type":"string"}}}}}}}},"401":{"description":"Unauthorized - authentication required","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"object","properties":{"code":{"type":"string","example":"notloggedin"},"info":{"type":"string"}}}}}}}}},"parameters":[{"name":"action","in":"query","required":true,"description":"The action to perform","schema":{"type":"string","enum":["query","login","parse","opensearch","edit","delete","move","rollback","upload","emailuser","watch","patrol","purge","help"]},"index$":0},{"name":"format","in":"query","description":"The format of the output","schema":{"type":"string","enum":["json","xml","php","yaml","rawfm","jsonfm","xmlfm"],"default":"json"},"index$":1},{"name":"titles","in":"query","description":"A list of titles to work on (for query action)","schema":{"type":"string"},"index$":2},{"name":"pageids","in":"query","description":"A list of page IDs to work on","schema":{"type":"string"},"index$":3},{"name":"prop","in":"query","description":"Which properties to get for the queried pages","schema":{"type":"string"},"index$":4},{"name":"list","in":"query","description":"Which lists to get","schema":{"type":"string"},"index$":5},{"name":"meta","in":"query","description":"Which metadata to get","schema":{"type":"string","enum":["siteinfo","userinfo","allmessages","tokens"]},"index$":6},{"name":"search","in":"query","description":"Search for page titles or text matching this value","schema":{"type":"string"},"index$":7},{"name":"limit","in":"query","description":"How many results to return","schema":{"type":"integer","default":10},"index$":8},{"name":"continue","in":"query","description":"Continue token for pagination","schema":{"type":"string"},"index$":9},{"name":"redirects","in":"query","description":"Automatically resolve redirects","schema":{"type":"boolean"},"index$":10}],"securitySource":"unspecified","securitySchemes":{"cookieAuth":{"type":"apiKey","in":"cookie","name":"session","description":"Session cookie obtained after successful login"}}}})
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
  
