class CachedResponses {
    private static instance: CachedResponses;
    private _cache = {};

    public static getInstance(): CachedResponses {
        if (!CachedResponses.instance) {
            CachedResponses.instance = new CachedResponses();
        }

        return CachedResponses.instance;
    }

    public setResponse(key: string, data: object) {
        this._cache[key] = data;
        console.log("SET Cached ",key, Object.assign({},this._cache));
    }
    public getResponse(key: string): object {
        console.log("GET Cache ",key, Object.assign({},this._cache));
        return this._cache[key];
    }
}

export default CachedResponses;
