"use strict";
var Ng2ContentfulConfig = (function () {
    function Ng2ContentfulConfig() {
    }
    Object.defineProperty(Ng2ContentfulConfig, "isConfigured", {
        get: function () {
            return this._config != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng2ContentfulConfig, "config", {
        get: function () {
            return this._config;
        },
        set: function (config) {
            this._config = config;
        },
        enumerable: true,
        configurable: true
    });
    return Ng2ContentfulConfig;
}());
exports.Ng2ContentfulConfig = Ng2ContentfulConfig;
//# sourceMappingURL=ng2-contentful-config.js.map