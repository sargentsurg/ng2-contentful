import {Component} from "angular2/core";
import {CanActivate} from "angular2/router";
import {CanSeeContentfulData} from "../app.tools";


@Component({
  template: `
    <h2>Entries</h2>
  `
})
@CanActivate(CanSeeContentfulData)
export class EntriesComponent {
  static RoutingName = 'Entries';
}
