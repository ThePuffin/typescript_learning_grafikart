import Demod from "./module";

enum DIRECTIONS {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

let ad = new Demod({
  autoplay: true,
  direction: DIRECTIONS.LEFT
});
