
export interface IContentfulConfig {
  space: string;
  accessToken: string;
  secure?: boolean;
}


class Ng2ContentfulConfigSingleton {
  private static _instance: Ng2ContentfulConfigSingleton = null;
  private _config: IContentfulConfig = {
    space: 'we1a0j890sea',
    accessToken: '7e33820119e63f72f286be1f474e89be6eafc4af751b2e91b93f130abc5a20a1'
  };

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
