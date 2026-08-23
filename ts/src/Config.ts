
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'MediawikiAction',
        slug: "mediawiki-action",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://en.wikipedia.org/w",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      api: {
      },

    }
  }


  entity = {
    "api": {
      "fields": [
        {
          "name": "batchcomplete",
          "type": "`$STRING`"
        },
        {
          "name": "continue",
          "type": "`$OBJECT`"
        },
        {
          "name": "edit",
          "type": "`$OBJECT`"
        },
        {
          "name": "error",
          "type": "`$OBJECT`"
        },
        {
          "name": "login",
          "type": "`$OBJECT`"
        },
        {
          "name": "query",
          "type": "`$OBJECT`"
        }
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
                "api.php"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "continue",
                    "orig": "continue",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "list",
                    "orig": "list",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "meta",
                    "orig": "meta",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "pageid",
                    "orig": "pageid",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "prop",
                    "orig": "prop",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "redirect",
                    "orig": "redirect",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "title",
                    "orig": "title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api.php",
              "parts": [
                "api.php"
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
                  "title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

