
import { Context } from './Context'


class MediawikiActionError extends Error {

  isMediawikiActionError = true

  sdk = 'MediawikiAction'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MediawikiActionError
}

