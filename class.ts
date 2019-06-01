class Demo {
  //   public ellement;

  private _element: string;

  constructor() {
    // this.ellement = 2;
  }

  //   private demo(ellement: number) {
  //     console.log(ellement);
  //   }

  static demos() {
    console.log("object");
  }

  set element(value: string) {
    this._element = value;
  }

  get element(): string {
    return this._element;
  }
}

class Demo2 extends Demo {
  public test() {}
}

let d = new Demo();
let dd = new Demo2();

// d.demo(d.ellement); //don't access because it's private

Demo.demos();

d.element = "Salut";
console.log(d.element);
console.log(dd.test());
