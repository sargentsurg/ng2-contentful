
export interface IContentfulConfig {
  space: string;
  accessToken: string;
  secure?: boolean;
}


class Ng2ContentfulConfigSingleton {
  private static _instance: Ng2ContentfulConfigSingleton = null;
  private _config: IContentfulConfig;

  public static getInstance(): Ng2ContentfulConfigSingleton {
    if (Ng2ContentfulConfigSingleton._instance == null) {
      Ng2ContentfulConfigSingleton._instance = new Ng2ContentfulConfigSingleton();
    }
    return Ng2ContentfulConfigSingleton._instance;
  }

  get isConfigured() {
    return this._config != null;
  }

  get config() {
    return this._config;
  }

  set config(config: IContentfulConfig) {
    this._config = config;
  }
}

export let Ng2ContentfulConfig = Ng2ContentfulConfigSingleton.getInstance();
