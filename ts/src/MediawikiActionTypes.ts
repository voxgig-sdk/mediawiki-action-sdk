// Typed models for the MediawikiAction SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Api {
  batchcomplete?: string
  continue?: Record<string, any>
  edit?: Record<string, any>
  error?: Record<string, any>
  login?: Record<string, any>
  query?: Record<string, any>
}

export interface ApiLoadMatch {
  action: string
  continue?: string
  format?: string
  limit?: number
  list?: string
  meta?: string
  pageid?: string
  prop?: string
  redirect?: boolean
  search?: string
  title?: string
}

export interface ApiCreateData {
  batchcomplete?: string
  continue?: Record<string, any>
  edit?: Record<string, any>
  error?: Record<string, any>
  login?: Record<string, any>
  query?: Record<string, any>
}

