
export interface IConfig<T> {
    get(key: string): T;
}

export class Config implements IConfig<string> {
    protected config: {[key: string]: string};

    /**
     * Accepts an object with `key`: `ENV key` pairs
     * @param mapping Object
     */
    constructor(mapping: {[key: string]: any}) {
        this.config = {};

        Object.keys(mapping).map((key) => {
            try {
                this.config[key] = process.env[ mapping[key] ];
            } catch (error) {
                throw new Error(error);
            }
        });
    }

    /**
     * Returns value if ENV var key found, otherwise undefined
     * @param key string - lowerCamelCase dictionary key to retrieve value
     */
    public get(key: string): string {
        return `${this.config[key]}`;
    }
}
