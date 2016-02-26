import 'rxjs/add/operator/map';
import {Component, OnInit} from 'angular2/core';
import {CanActivate, ROUTER_DIRECTIVES} from 'angular2/router';
import {CanSeeContentfulData} from '../app.tools';
import {ContentfulService} from 'ng2-contentful.ts';
import {ContentfulTypes as ct} from 'ng2-contentful.ts';


@Component({
  providers: [ContentfulService],
  directives: [...ROUTER_DIRECTIVES],
  template: `
    <h2>Content types</h2>
    <div class="error" *ngIf="error">
      {{ error }}
    </div>
    <div>
      <ul>
        <li *ngFor="#contentType of contentTypes">
          <a [routerLink]="['Entries', {contentType: contentType.sys.id }]">
            {{ contentType.name }}
          </a>
        </li>
      </ul>
    </div>
  `
})
@CanActivate(CanSeeContentfulData)
export class ContentTypesComponent implements OnInit {
  static RoutingName = 'ContentTypes';

  //noinspection JSMismatchedCollectionQueryUpdate
  private contentTypes: Array<ct.ContentType>;
  private error: string;

  constructor(private _contentfulService: ContentfulService) {
  }

  ngOnInit(): any {
    this._contentfulService
      .getContentTypes()
      .subscribe(
        response => {
          this.contentTypes = (<ct.IterableResponse<ct.ContentType>> response.json()).items;
        },
        error => {
          this.error = JSON.stringify(error.json());
        }
      );
  }
}
