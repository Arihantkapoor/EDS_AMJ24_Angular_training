"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HCL_1 = require("./HCL");
var HCLClient = /** @class */ (function () {
    function HCLClient() {
        var obj = new HCL_1.HCL(123, "TCS");
        obj.display();
    }
    return HCLClient;
}());
var obj = new HCLClient();
