import {enableProdMode, provide, ComponentRef} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

const ENV_PROVIDERS = [];

// if ('production' === process.env.ENV) {
//   enableProdMode();
// } else {
//   ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
// }

import {appInjector} from './src/app-injector';
import {App} from './src/components/app.component';

document.addEventListener('DOMContentLoaded', () => {
  bootstrap(App, [
    ...ENV_PROVIDERS,
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ]).then((appRef: ComponentRef ) => {
    appInjector(appRef.injector);
  })
    .catch(err => console.error(err));
});
