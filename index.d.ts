export interface IConfig<T> {
    get(key: string): T;
}
export declare class Config implements IConfig<string> {
    protected config: {
        [key: string]: string;
    };
    constructor(mapping: {
        [key: string]: any;
    });
    get(key: string): string;
}
