import {Injectable} from 'angular2/core';
import {Http, Response, RequestOptionsArgs, URLSearchParams, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Ng2ContentfulConfig} from '../ng2-contentful-config';

export interface SearchItem {
  param: string,
  value: string
}

@Injectable()
export class ContentfulService {
  private static HOST = 'cdn.contentful.com';
  private _linksLevel = 1;

  constructor(private _http: Http) {
  }

  getContentTypes(): Observable<Response> {
    return this.request('/content_types/');
  }

  getContentType(contentTypeId: String): Observable<Response> {
    return this.request(`/content_types/${contentTypeId}`);
  }

  getAssets(): Observable<Response> {
    return this.request('/assets/');
  }

  getAsset(assetId: String): Observable<Response> {
    return this.request(`/assets/${assetId}`);
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

  getEntryBySlug(type: string, slug: string): Observable<Response> {
    let queryParams = new URLSearchParams();
    queryParams.set(
      'content_type', type
    );
    queryParams.set(
      'fields.slug', slug
    );
    queryParams.set(
      'limit', '1'
    );
    // TODO should return only one result
    return this.request('/entries/', queryParams);
  }

  searchEntries(type: string, ...searchItems: SearchItem[]): Observable<Response> {
    let queryParams = new URLSearchParams();
    queryParams.set(
      'content_type', type
    );
    for (let searchItem of searchItems) {
      queryParams.set(searchItem.param, searchItem.value);
    }
    return this.request('/entries/', queryParams);
  }

  withLinksLevel(level: number): ContentfulService {
    this._linksLevel = level;
    return this;
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
    // set query for links level - this is temporary
    queryParams.set('include', this._linksLevel.toString());
    // reset to default value
    this._linksLevel = 1;

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
