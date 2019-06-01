import Demod from "./module";
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
