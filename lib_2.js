/*
let x = "Hi!";
//export default x;

let data = [5, 6, 7];
let obj = {x : 4, y : 3};
//export {data, obj};

export {x as default, data, obj};
*/

let add = function(n1, n2){
    console.log(n1 + n2);
};
let multiply = function(n1, n2){
    console.log(n1 * n2);
};
let math = {
    add : add, 
    multiply : multiply
};
export default math;
export {add, multiply};