import { MediawikiActionEntityBase } from '../MediawikiActionEntityBase';
import type { MediawikiActionSDK } from '../MediawikiActionSDK';
import type { Control } from '../types';
import type { Api, ApiLoadMatch, ApiCreateData } from '../MediawikiActionTypes';
declare class ApiEntity extends MediawikiActionEntityBase<Api> {
    constructor(client: MediawikiActionSDK, entopts: any);
    make(this: ApiEntity): ApiEntity;
    load(this: any, reqmatch?: ApiLoadMatch, ctrl?: Control): Promise<ApiEntity>;
    create(this: any, reqdata?: ApiCreateData, ctrl?: Control): Promise<ApiEntity>;
}
export { ApiEntity };
