
import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContentfulService {

  constructor (private _http: Http) {}



  private handleError (error: Response) {
    return Observable.throw(error.json().error || 'Error');
  }
}
