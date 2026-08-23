package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "MediawikiAction",
			"slug": "mediawiki-action",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://en.wikipedia.org/w",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"api": map[string]any{},
			},
		},
		"entity": map[string]any{
			"api": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "batchcomplete",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "continue",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "edit",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "error",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "login",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "query",
						"type": "`$OBJECT`",
					},
				},
				"name": "api",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api.php",
								"parts": []any{
									"api.php",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "action",
											"orig": "action",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "continue",
											"orig": "continue",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "list",
											"orig": "list",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "meta",
											"orig": "meta",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pageid",
											"orig": "pageid",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prop",
											"orig": "prop",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "redirect",
											"orig": "redirect",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api.php",
								"parts": []any{
									"api.php",
								},
								"select": map[string]any{
									"exist": []any{
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
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
