const stackCreate = () => ({
    arr: []
})

function stackEmpty(stack)
{
    if (stack.arr)
    {
        if (stack.arr[0] == null)
         return true;
      else
          return false;
    }
};

function stackPush(stack, data)
{
    if (stack.arr)
    {
        if (data)
        {        
            let num = 0;
            while (stack.arr[num])
                num++;
            stack.arr[num] = data;
            return stack;
        }
    }
    else
        console.log("Empty Obj");
}

function stackPeek(stack)
{
    if (stack.arr[0])
    {
        let num = 0;
        while (stack.arr[num])
            num++;
        return stack.arr[num -1];
    }
    else
        console.log("Empty Array");
}

function stackPop(stack)
{
    if (stack.arr[0])
    {
        let num = 0;
        while (stack.arr[num])
            num++;
        stack.arr = stack.arr[num - 2];
        return stack;
    }
    else
        console.log("Pop Error");
}


let stack = stackCreate();

console.log(stack.arr);

console.log(stackEmpty(stack));
stack = stackPush(stack, '1');
console.log(stackEmpty(stack));
console.log(stack.arr[0]);
console.log(stack);
stack = stackPush(stack, 20);
console.log("**** PEEKKKK ****");
console.log(stackPeek(stack));
console.log(stack);
stack = stackPop(stack);
console.log(stack);
console.log("**** PEEKKKK ****");
console.log(stackPeek(stack));