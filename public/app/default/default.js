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
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var DefaultPage = (function () {
    function DefaultPage(http) {
        var _this = this;
        this.messages = [];
        http.get("/fetch").subscribe(function (success) {
            var data = success.json();
            for (var i = 0; i < data.length; i++) {
                _this.messages.push(data[i].message);
            }
        }, function (error) {
            console.log(JSON.stringify(error));
        });
        this.chatBox = "";
        this.socket = io();
        this.socket.on("chat_message", function (msg) {
            _this.messages.push(msg);
        });
    }
    DefaultPage.prototype.send = function (message) {
        this.socket.emit("chat_message", message);
        this.chatBox = "";
    };
    DefaultPage = __decorate([
        core_1.Component({
            selector: 'default',
            viewProviders: [http_1.HTTP_PROVIDERS]
        }),
        core_1.View({
            templateUrl: 'app/default/default.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DefaultPage);
    return DefaultPage;
}());
exports.DefaultPage = DefaultPage;
//# sourceMappingURL=default.js.map