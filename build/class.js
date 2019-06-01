var Grafikart;
(function (Grafikart) {
    class NewDemo {
        constructor(options) {
            this.options = options;
        }
    }
    Grafikart.NewDemo = NewDemo;
})(Grafikart || (Grafikart = {}));
class Demo {
    constructor(options) {
        // this.ellement = 2;
        this.options = options;
    }
    //   private demo(ellement: number) {
    //     console.log(ellement);
    //   }
    static demos() {
        console.log("object");
    }
    set element(value) {
        this._element = value;
    }
    get element() {
        return this._element;
    }
}
class Demo2 extends Demo {
    test() { }
}
let d = new Demo({
    autoplay: true,
    x: 1,
    success: function (data) { }
});
let dd = new Demo2({
    autoplay: false,
    success: function (datas) { }
});
let ddd = new Grafikart.NewDemo({
    autoplay: false,
    success: function (datas) { }
});
// d.demo(d.ellement); //don't access because it's private
Demo.demos();
d.element = "Salut";
console.log(d.element);
console.log(dd.test());
