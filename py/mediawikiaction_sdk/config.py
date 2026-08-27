# MediawikiAction SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "MediawikiAction",
            "slug": "mediawiki-action",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://en.wikipedia.org/w",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "api": {},
            },
        },
        "entity": {
      "api": {
        "fields": [
          {
            "name": "batchcomplete",
            "type": "`$STRING`",
          },
          {
            "name": "continue",
            "type": "`$OBJECT`",
          },
          {
            "name": "edit",
            "type": "`$OBJECT`",
          },
          {
            "name": "error",
            "type": "`$OBJECT`",
          },
          {
            "name": "login",
            "type": "`$OBJECT`",
          },
          {
            "name": "query",
            "type": "`$OBJECT`",
          },
        ],
        "name": "api",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api.php",
                "parts": [
                  "api.php",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "action",
                      "orig": "action",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "continue",
                      "orig": "continue",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "list",
                      "orig": "list",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "meta",
                      "orig": "meta",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "pageid",
                      "orig": "pageid",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "prop",
                      "orig": "prop",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "redirect",
                      "orig": "redirect",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "search",
                      "orig": "search",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api.php",
                "parts": [
                  "api.php",
                ],
                "select": {
                  "exist": [
                    "action",
                    "continue",
                    "format",
                    "limit",
                    "list",
                    "meta",
                    "pageid",
                    "prop",
                    "redirect",
                    "search",
                    "title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
