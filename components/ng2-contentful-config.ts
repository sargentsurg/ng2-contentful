export interface IContentfulConfig {
  space: string;
  accessToken: string;
  secure?: boolean;
}


export namespace Ng2ContentfulConfig {
  export let config: IContentfulConfig;

  export function isConfigured() {
    return this.config != null;
  }
}
