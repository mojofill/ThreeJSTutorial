"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.boxObject = void 0;
var THREE = require("three");
var boxObject = /** @class */ (function (_super) {
    __extends(boxObject, _super);
    function boxObject(width, length, height) {
        if (width === void 0) { width = 1; }
        if (length === void 0) { length = 1; }
        if (height === void 0) { height = 1; }
        var _this = _super.call(this, new THREE.BoxGeometry(width, height, length)) || this;
        _this.velocity = new THREE.Vector3(); // default 0,0,0
        return _this;
    }
    boxObject.prototype.setName = function (name) {
        this.name = name;
    };
    return boxObject;
}(THREE.Mesh));
exports.boxObject = boxObject;
