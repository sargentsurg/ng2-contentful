"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var ng2_contentful_config_1 = require('../ng2-contentful-config');
var ContentfulService = (function () {
    function ContentfulService(_http) {
        this._http = _http;
        this._linksLevel = 1;
    }
    ContentfulService.prototype.getContentTypes = function () {
        return this.request('/content_types/');
    };
    ContentfulService.prototype.getContentType = function (contentTypeId) {
        return this.request("/content_types/" + contentTypeId);
    };
    ContentfulService.prototype.getAssets = function () {
        return this.request('/assets/');
    };
    ContentfulService.prototype.getAsset = function (assetId) {
        return this.request("/assets/" + assetId);
    };
    ContentfulService.prototype.getEntriesByType = function (type) {
        var queryParams = new http_1.URLSearchParams();
        queryParams.set('content_type', type);
        return this.request('/entries/', queryParams);
    };
    ContentfulService.prototype.getEntry = function (entryId) {
        return this.request("/entries/" + entryId);
    };
    ContentfulService.prototype.getEntryBySlug = function (type, slug) {
        var queryParams = new http_1.URLSearchParams();
        queryParams.set('content_type', type);
        queryParams.set('fields.slug', slug);
        queryParams.set('limit', '1');
        // TODO should return only one result
        return this.request('/entries/', queryParams);
    };
    ContentfulService.prototype.searchEntries = function (type) {
        var searchItems = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            searchItems[_i - 1] = arguments[_i];
        }
        var queryParams = new http_1.URLSearchParams();
        queryParams.set('content_type', type);
        for (var _a = 0, searchItems_1 = searchItems; _a < searchItems_1.length; _a++) {
            var searchItem = searchItems_1[_a];
            queryParams.set(searchItem.param, searchItem.value);
        }
        return this.request('/entries/', queryParams);
    };
    ContentfulService.prototype.withLinksLevel = function (level) {
        this._linksLevel = level;
        return this;
    };
    ContentfulService.prototype.request = function (path, queryParams) {
        if (queryParams === void 0) { queryParams = new http_1.URLSearchParams(); }
        var url = [
            'https://',
            ContentfulService.HOST,
            '/spaces/',
            ng2_contentful_config_1.Ng2ContentfulConfig.config.space,
            path
        ].join('');
        queryParams.set('access_token', ng2_contentful_config_1.Ng2ContentfulConfig.config.accessToken);
        // set query for links level - this is temporary
        queryParams.set('include', this._linksLevel.toString());
        // reset to default value
        this._linksLevel = 1;
        var options = {
            headers: new http_1.Headers({
                'Content-Type': 'application/vnd.contentful.delivery.v1+json'
            }),
            search: queryParams
        };
        return this._http
            .get(url, options);
    };
    ContentfulService.HOST = 'cdn.contentful.com';
    ContentfulService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContentfulService);
    return ContentfulService;
}());
exports.ContentfulService = ContentfulService;
//# sourceMappingURL=contentful.service.js.map