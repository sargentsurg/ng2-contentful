
import {appInjector} from "../app-injector";
import {Router} from "angular2/router";
import {Ng2ContentfulConfig} from "../../../components/ng2-contentful-config";
import {CredentialsComponent} from "./credentials/credentials.component";
/**
 * Not the best place for that
 */

export let CanSeeContentfulData = () => {
  var injector = appInjector();
  let router = injector.get(Router);
  if (!Ng2ContentfulConfig.isConfigured) {
    router.navigate([CredentialsComponent.RoutingName]);
    return false;
  }
  return true;
};
