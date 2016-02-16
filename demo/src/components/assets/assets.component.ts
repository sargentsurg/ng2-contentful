import {Component, OnInit} from "angular2/core";
import {CanSeeContentfulData} from "../app.tools";
import {CanActivate} from "angular2/router";
import {ContentfulService} from "../../../../components/services/contentful.service";
import {ContentfulTypes as ct} from "../../../../components/ng-contentful-types";

@Component({
  providers: [ContentfulService],
  template: `
    <h2>Assets</h2>
    <div class="error" *ngIf="error">
      {{ error }}
    </div>
    <div>
      <ul>
        <li *ngFor="#asset of assets">
          <a href="{{ asset.fields.file.url }}">
            {{ asset.fields.title }}
          </a>
        </li>
      </ul>
    </div>
  `
})
@CanActivate(CanSeeContentfulData)
export class AssetsComponent implements OnInit {
  static RoutingName = 'Assets';

  private assets: ct.Common<ct.Asset>[];
  private error: string;

  constructor(private _contentfulService: ContentfulService) {
  }

  ngOnInit(): any {
    this._contentfulService
      .getAssets()
      .subscribe(
        response => {
          this.assets = <ct.Common<ct.Asset>[]> response.json().items;
        },
        error => {
          this.error = JSON.stringify(error.json())
        }
      )
  }
}
