# MediawikiAction SDK

Read and edit Wikipedia and other MediaWiki wikis through a stable, multi-module HTTP API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About MediaWiki Action API

The [MediaWiki Action API](https://www.mediawiki.org/wiki/API:Main_page) is the long-standing HTTP interface exposed by every [MediaWiki](https://www.mediawiki.org/) installation, including [Wikipedia](https://en.wikipedia.org/) and the other [Wikimedia](https://www.wikimedia.org/) projects. All endpoints live under a single `api.php` entry point (for English Wikipedia, `https://en.wikipedia.org/w/api.php`), with the operation selected by the `action` query parameter.

What you can do through the API:

- Authenticate and manage users — `action=login`, `action=logout`, `action=createaccount`, `action=clientlogin`, plus token retrieval via `action=query&meta=tokens`.
- Read and search content — `action=query` with `prop=revisions|extracts|info|links|categories|images`, `list=search|categorymembers|allpages|backlinks`, and `action=opensearch` for type-ahead suggestions.
- Edit pages — `action=edit`, `action=move`, `action=delete`, `action=protect`, `action=rollback`, `action=upload`, `action=purge`.
- Parse and expand wikitext — `action=parse`, `action=expandtemplates`.
- Site metadata — `action=query&meta=siteinfo|userinfo|allmessages|filerepoinfo`.

The API accepts both GET and POST (POST is required for write actions and large payloads) and can return JSON, JSONFM, XML, or PHP-serialized output via the `format` parameter. Anonymous reads work without credentials; edits require login plus a CSRF token. Cross-origin requests need the `origin` parameter. There is no fixed published rate limit on the public Wikimedia endpoints, but clients are expected to follow the [User-Agent policy](https://meta.wikimedia.org/wiki/User-Agent_policy) and avoid running requests in parallel against the same wiki.

## Try it

**TypeScript**
```bash
npm install mediawiki-action
```

**Python**
```bash
pip install mediawiki-action-sdk
```

**PHP**
```bash
composer require voxgig/mediawiki-action-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/mediawiki-action-sdk/go
```

**Ruby**
```bash
gem install mediawiki-action-sdk
```

**Lua**
```bash
luarocks install mediawiki-action-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { MediawikiActionSDK } from 'mediawiki-action'

const client = new MediawikiActionSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o mediawiki-action-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "mediawiki-action": {
      "command": "/abs/path/to/mediawiki-action-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Api** | The single `api.php` entry point that dispatches every MediaWiki Action — authentication, page queries, edits, search, and site metadata — based on the `action` parameter (for example `action=query`, `action=edit`, `action=login`, `action=opensearch`). | `/api.php` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from mediawikiaction_sdk import MediawikiActionSDK

client = MediawikiActionSDK({})


# Load a specific api
api, err = client.Api(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'mediawikiaction_sdk.php';

$client = new MediawikiActionSDK([]);


// Load a specific api
[$api, $err] = $client->Api(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/mediawiki-action-sdk/go"

client := sdk.NewMediawikiActionSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "MediawikiAction_sdk"

client = MediawikiActionSDK.new({})


# Load a specific api
api, err = client.Api(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("mediawiki-action_sdk")

local client = sdk.new({})


-- Load a specific api
local api, err = client:Api(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = MediawikiActionSDK.test()
const result = await client.Api().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = MediawikiActionSDK.test(None, None)
result, err = client.Api(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = MediawikiActionSDK::test(null, null);
[$result, $err] = $client->Api(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Api(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MediawikiActionSDK.test(nil, nil)
result, err = client.Api(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Api(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the MediaWiki Action API

- Upstream: [https://www.mediawiki.org/wiki/API:Main_page](https://www.mediawiki.org/wiki/API:Main_page)
- API docs: [https://www.mediawiki.org/wiki/Special:MyLanguage/API:Action_API](https://www.mediawiki.org/wiki/Special:MyLanguage/API:Action_API)

- The MediaWiki software and its Action API are licensed under [GPL-2.0-or-later](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).
- Wiki content on Wikipedia and most Wikimedia projects is separately licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) and/or [GFDL](https://www.gnu.org/licenses/fdl-1.3.html) — attribution is required when reusing article text.
- Clients should set a descriptive `User-Agent` per the [Wikimedia User-Agent policy](https://meta.wikimedia.org/wiki/User-Agent_policy).
- Respect the [Wikimedia API etiquette](https://www.mediawiki.org/wiki/API:Etiquette) for request rates and concurrency.

---

Generated from the MediaWiki Action API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
