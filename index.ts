import Demod from "./module";
import scrollTo from "scroll-to";

declare let $: JQueryStatic;
/* import $ = require('jquery') 
import * as $ = require ('jquery')
*/

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

scrollTo(500, 1200, {
  ease: "out-bounce",
  duration: 1500
});

$(".demo").click(function() {
  scrollTo(0, 0);
});
