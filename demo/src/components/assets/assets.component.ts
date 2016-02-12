import {Component} from "angular2/core";
import {CanSeeContentfulData} from "../app.tools";
import {CanActivate} from "angular2/router";

@Component({
  template: `
    <h2>Assets</h2>
  `
})
@CanActivate(CanSeeContentfulData)
export class AssetsComponent {
  static RoutingName = 'Assets';
}
