import { Context } from './Context';
declare class MediawikiActionError extends Error {
    isMediawikiActionError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { MediawikiActionError };
