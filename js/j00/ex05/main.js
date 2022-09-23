import Arr from "./stack.js"

let stack = Arr.stackCreate();

console.log(stack.arr);

console.log(Arr.stackEmpty(stack));
stack = Arr.stackPush(stack, '1');
console.log(Arr.stackEmpty(stack));
console.log(stack.arr[0]);
console.log(stack);
stack = Arr.stackPush(stack, 20);
console.log("**** PEEKKKK ****");
console.log(Arr.stackPeek(stack));
console.log(stack);
stack = Arr.stackPop(stack);
console.log(stack);
console.log("**** PEEKKKK ****");
console.log(Arr.stackPeek(stack));