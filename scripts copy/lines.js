"use strict"
/** 
* @param {Number} x
* @param {Number} y
* @param {Number} r
*/

export function fillcircle(x, y,r) { 
    context.beginPath();
    context.arc(x, y, r, 0, math.PI * 2);
    context.fillRect();
}




// export function hsl(h, s, l) { 
//    return "hsl(" + h + "," + s + "%," + 1 + "%)";
//}