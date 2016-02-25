import {Component, OnInit} from 'angular2/core';
import {CanActivate, RouteParams} from 'angular2/router';
import {CanSeeContentfulData} from '../app.tools';
import {ContentfulTypes as ct} from 'ng2-contentful';
import {ContentfulService} from 'ng2-contentful';


@Component({
  providers: [ContentfulService],
  template: `
    <h2>Entries</h2>
    <div class="error" *ngIf="error">
      {{ error }}
    </div>
    <div>
      <ul>
        <li *ngFor="#entry of entries">
           {{ entry.fields.title }}
        </li>
      </ul>
    </div>
  `
})
@CanActivate(CanSeeContentfulData)
export class EntriesComponent implements OnInit {
  static RoutingName = 'Entries';

  private entries: ct.Common<any>[];

  constructor(private _contentfulService: ContentfulService,
              private _routeParams: RouteParams) {
  }

  ngOnInit(): any {
    let contentType = this._routeParams.get('contentType');
    this._contentfulService
      .getEntriesByType(contentType)
      .subscribe(
        response => {
          this.entries = (<ct.IterableResponse<ct.Common<any>>> response.json()).items;
          console.log(this.entries);
        }
      );
  }
}
