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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GithubService = /** @class */ (function () {
    function GithubService(_http) {
        this._http = _http;
        this.client_id = process.env.CLIENT_ID;
        this.client_secret = process.env.CLIENT_SECRET;
        console.log('Service ready');
        this.username = 'pinkyrabbit';
    }
    GithubService.prototype.getUser = function () {
        // tslint:disable-next-line:max-line-length
        return this._http.get("http://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getRepos = function () {
        // tslint:disable-next-line:max-line-length
        return this._http.get("http://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.updateUser = function (username) {
        this.username = username;
    };
    GithubService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GithubService);
    return GithubService;
}());
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map