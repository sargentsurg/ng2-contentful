export interface IContentfulConfig {
    space: string;
    accessToken: string;
    secure?: boolean;
}
export declare class Ng2ContentfulConfig {
    private static _config;
    static isConfigured: boolean;
    static config: IContentfulConfig;
}
