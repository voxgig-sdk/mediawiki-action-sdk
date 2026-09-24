"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediawikiActionError = void 0;
class MediawikiActionError extends Error {
    isMediawikiActionError = true;
    sdk = 'MediawikiAction';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MediawikiActionError = MediawikiActionError;
//# sourceMappingURL=MediawikiActionError.js.map