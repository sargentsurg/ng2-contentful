import {Injectable} from "angular2/core";
import {Http, Response, RequestOptionsArgs, URLSearchParams, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Ng2ContentfulConfig} from "../ng2-contentful-config";


@Injectable()
export class ContentfulService {
  private static HOST = 'cdn.contentful.com';

  constructor(private _http: Http) {
  }

  getContentTypes(): Observable<any> {
    return this.request('/content_types/');
  }

  getContentType(contentTypeId: String): Observable<Response> {
    return this.request(`/content_types/${contentTypeId}`);
  }

  getAssets(): Observable<Response> {
    return this.request('/assets/')
  }

  getAsset(assetId: String): Observable<Response> {
    return this.request(`/assets/${assetId}`)
  }

  getEntriesByType(type: string): Observable<Response> {
    let queryParams = new URLSearchParams();
    queryParams.set(
      'content_type', type
    );
    return this.request('/entries/', queryParams);
  }

  getEntry(entryId: string): Observable<Response> {
    return this.request(`/entries/${entryId}`);
  }

  private request(path: String, queryParams: URLSearchParams = new URLSearchParams()): Observable<Response> {
    let url = [
      'https://',
      ContentfulService.HOST,
      '/spaces/',
      Ng2ContentfulConfig.config.space,
      path
    ].join('');

    queryParams.set(
      'access_token', Ng2ContentfulConfig.config.accessToken
    );

    let options: RequestOptionsArgs = {
      headers: new Headers({
        'Content-Type': 'application/vnd.contentful.delivery.v1+json'
      }),
      search: queryParams
    };

    return this._http
      .get(url, options)
      ;
  }
}
