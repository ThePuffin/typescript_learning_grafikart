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
var d = new Demo();
// d.demo(d.ellement); //don't access because it's private
Demo.demos();
d.element = "Salut";
console.log(d.element);
