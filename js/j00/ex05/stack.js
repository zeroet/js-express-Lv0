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
        console.log("Empty Array");
}

function stackPeek(stack)
{
    if (stack)
    {
        let num = 0;
        while (stack.arr[num])
            num++;
        const result = stack.arr[num];
        return result;
        
    }
}

function stackPop(stack)
{
    if (stack.arr[0])
    {
        let num = 0;
        while (stack.arr[num])
            num++;
        stack.arr = stack.arr[--num];
    }
}


let stack = stackCreate();

console.log(stack.arr);

console.log(stackEmpty(stack));
stack = stackPush(stack, 10);
stack = stackPush(stack, 20);
console.log(stackPeek(stack));