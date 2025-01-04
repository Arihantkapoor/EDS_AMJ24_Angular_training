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
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    return Animal;
}());
var lion = /** @class */ (function (_super) {
    __extends(lion, _super);
    function lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    lion.prototype.roar = function () {
        console.log(' ${this.name} roars.');
    };
    return lion;
}(Animal));
var lion1 = new lion("Arihant", "Human");
lion1.roar();
