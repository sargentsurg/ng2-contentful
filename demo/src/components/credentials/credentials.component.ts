import {Component, OnInit} from "angular2/core";
import {IContentfulConfig, Ng2ContentfulConfig} from "../../../../components/ng2-contentful-config";
import {Router} from "angular2/router";
import {ContentTypesComponent} from "../content-types/content-types.component";
/**
 * Created by dydo on 11/02/16.
 */


@Component({
  styles: [require('./credentials.scss')],
  template: `
    <h2>Credentials</h2>
    <div class="form">
      <div class="field">
        <label for="space">Space ID</label>
        <input type="text"
               name="space"
               [(ngModel)]="model.space"/>
      </div>

      <div class="field">
        <label for="accessToken">Access Token</label>
        <input type="text"
               name="accessToken"
               [(ngModel)]="model.accessToken"/>
      </div>
      <button (click)="saveConfig()">
        Save
      </button>
    </div>
  `
})
export class CredentialsComponent implements OnInit {
  static RoutingName = 'Credentials';
  private model: IContentfulConfig = {
    space: '', accessToken: ''
  };

  constructor(private _router: Router) {

  }

  ngOnInit(): any {
    if (Ng2ContentfulConfig.isConfigured) {
      this.model = Ng2ContentfulConfig.config;
    }
  }

  saveConfig() {
    if (!this.model || (!this.model.space.length || !this.model.accessToken.length)) {
      console.warn('credentials empty !');
      return
    }

    Ng2ContentfulConfig.config = {
      space: this.model.space,
      accessToken: this.model.accessToken
    };

    this._router.navigate([ContentTypesComponent.RoutingName])
  }
}
