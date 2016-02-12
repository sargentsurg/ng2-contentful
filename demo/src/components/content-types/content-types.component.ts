import {Component} from "angular2/core";
import {CanActivate} from "angular2/router";
import {CanSeeContentfulData} from "../app.tools";


@Component({
  template: `
    <h2>Content types</h2>
  `
})
@CanActivate(CanSeeContentfulData)
export class ContentTypesComponent {
  static RoutingName = 'ContentTypes';
}
