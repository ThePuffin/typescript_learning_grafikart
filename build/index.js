import Demod from "./module";
import scrollTo from "scroll-to";
/* import $ = require('jquery')
import * as $ = require ('jquery')
*/
var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["UP"] = 0] = "UP";
    DIRECTIONS[DIRECTIONS["DOWN"] = 1] = "DOWN";
    DIRECTIONS[DIRECTIONS["LEFT"] = 2] = "LEFT";
    DIRECTIONS[DIRECTIONS["RIGHT"] = 3] = "RIGHT";
})(DIRECTIONS || (DIRECTIONS = {}));
let ad = new Demod({
    autoplay: true,
    direction: DIRECTIONS.LEFT
});
scrollTo(500, 1200, {
    ease: "out-bounce",
    duration: 1500
});
$(".demo").click(function () {
    scrollTo(0, 0);
});
