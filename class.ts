namespace Grafikart {
  export class NewDemo {
    private options;

    constructor(options: DemoOption) {
      this.options = options;
    }
  }
}

interface DemoOption {
  autoplay: boolean;
  x?: number;
  success: (data: string) => void;
}

class Demo {
  //   public ellement;

  private _element: string;
  private options: DemoOption;

  constructor(options: DemoOption) {
    // this.ellement = 2;
    this.options = options;
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

let d = new Demo({
  autoplay: true,
  x: 1,
  success: function(data) {}
});
let dd = new Demo2({
  autoplay: false,
  success: function(datas) {}
});

let ddd = new Grafikart.NewDemo({
  autoplay: false,
  success: function(datas) {}
});

// d.demo(d.ellement); //don't access because it's private

Demo.demos();

d.element = "Salut";
console.log(d.element);
console.log(dd.test());
