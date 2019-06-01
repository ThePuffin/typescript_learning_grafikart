var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Demo = /** @class */ (function () {
    function Demo() {
        // this.ellement = 2;
    }
    //   private demo(ellement: number) {
    //     console.log(ellement);
    //   }
    Demo.demos = function () {
        console.log("object");
    };
    Object.defineProperty(Demo.prototype, "element", {
        get: function () {
            return this._element;
        },
        set: function (value) {
            this._element = value;
        },
        enumerable: true,
        configurable: true
    });
    return Demo;
}());
var Demo2 = /** @class */ (function (_super) {
    __extends(Demo2, _super);
    function Demo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Demo2.prototype.test = function () { };
    return Demo2;
}(Demo));
var d = new Demo();
var dd = new Demo2();
// d.demo(d.ellement); //don't access because it's private
Demo.demos();
d.element = "Salut";
console.log(d.element);
console.log(dd.test());
