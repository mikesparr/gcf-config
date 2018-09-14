"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = (function () {
    function Config(mapping) {
        var _this = this;
        this.config = {};
        if (!mapping || mapping === undefined) {
            throw new TypeError("mapping param must be an object");
        }
        Object.keys(mapping).map(function (key) {
            try {
                _this.config[key] = process.env[mapping[key]];
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    Config.prototype.get = function (key) {
        return "" + this.config[key];
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=index.js.map