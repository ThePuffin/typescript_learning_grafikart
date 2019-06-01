function Component(target) {
  console.log(target);
}
function Componentt(options) {
  return function component(target) {
    console.log(options, target);
  };
}
@Component
@Componentt({
  selector: ".demo"
})
export default class Demod {
  private options;
  constructor(options) {
    this.options = options;
  }
}
