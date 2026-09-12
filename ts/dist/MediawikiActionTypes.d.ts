export interface Api {
    batchcomplete?: string;
    continue?: Record<string, any>;
    edit?: Record<string, any>;
    error?: Record<string, any>;
    login?: Record<string, any>;
    query?: Record<string, any>;
}
export interface ApiLoadMatch {
    action: string;
    continue?: string;
    format?: string;
    limit?: number;
    list?: string;
    meta?: string;
    pageid?: string;
    prop?: string;
    redirect?: boolean;
    search?: string;
    title?: string;
}
export interface ApiCreateData {
    batchcomplete?: string;
    continue?: Record<string, any>;
    edit?: Record<string, any>;
    error?: Record<string, any>;
    login?: Record<string, any>;
    query?: Record<string, any>;
}
