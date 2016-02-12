import {ROUTER_DIRECTIVES, RouteConfig, OnActivate, Router, ComponentInstruction} from "angular2/router";
import {Component, OnInit} from "angular2/core";
import {CredentialsComponent} from "./credentials/credentials.component";
import {AssetsComponent} from "./assets/assets.component";
import {EntriesComponent} from "./entries/entries.component";
import {ContentTypesComponent} from "./content-types/content-types.component";
/**
 * Created by dydo on 11/02/16.
 */



@Component({
  selector: 'ng2-contentful-demo',
  directives: [...ROUTER_DIRECTIVES],
  styles: [require('./app.scss')],
  template: `
    <header>
    <nav>
      <h1>NG2 Contentful demo</h1>
      <ul>
        <li>
          <a [routerLink]=" ['Credentials'] ">Contentful Credentials</a>
        </li>
        <li>
          <a [routerLink]=" ['ContentTypes'] ">Content types</a>
        </li>
        <li>
          <a [routerLink]=" ['Entries'] ">Entries</a>
        </li>
        <li>
          <a [routerLink]=" ['Assets'] ">Assets</a>
        </li>
      </ul>
    </nav>
    </header>

    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path: '/', component: CredentialsComponent, name: 'Credentials', useAsDefault: true},
  {path: '/assets', component: AssetsComponent, name: AssetsComponent.RoutingName},
  {path: '/entries', component: EntriesComponent, name: EntriesComponent.RoutingName},
  {path: '/content-types', component: ContentTypesComponent, name: ContentTypesComponent.RoutingName},
  {path: '/**', redirectTo: ['Credentials']}
])
export class App implements OnActivate, OnInit{
  ngOnInit(): any {
    console.log(this._router);
    return undefined;
  }
  constructor (private _router: Router) {}

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    console.log(next, prev);
    return undefined;
  }
}
