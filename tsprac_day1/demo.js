var numsarray = [1, 2, 3, 4, 5];
console.log(numsarray);
numsarray.forEach(function (values) {
    console.log(values * 9);
});
var newarray = numsarray.map(function (values) {
    return values * 3;
});
console.log(newarray);
var mixed;
mixed = ["John", "smith", 1, 2, 3];
mixed.forEach(function (values) {
    if (typeof values == "number") {
        console.log(values * 4);
    }
    else {
        console.log(values.toUpperCase());
    }
});
var Testing = /** @class */ (function () {
    function Testing(name, age) {
        this.name = name;
        this.age = age;
    }
    Testing.prototype.display = function () {
        console.log(this.name, this.age);
    };
    return Testing;
}());
var test = new Testing("arihant", 25);
test.display();
