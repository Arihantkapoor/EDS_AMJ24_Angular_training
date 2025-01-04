"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HCL = void 0;
var HCL = /** @class */ (function () {
    function HCL(i, n) {
        this.id = i;
        this.name = n;
    }
    HCL.prototype.display = function () {
        console.log(this.id + " " + this.name);
    };
    return HCL;
}());
exports.HCL = HCL;
// let obj = new HCL(190,"Arihaka");
// obj.display();
// export class HCLNoida {
//     id: number;
//     name: string;
//     constructor(i: number, n: string) {
//       this.id = i;
//       this.name = n;
//     }
//     display():void{
//       console.log(this.id + " " + this.name);
//     }
//   }
