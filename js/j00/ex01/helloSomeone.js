
'use strict';

let helloSomeone = (value) =>
{
    if (typeof value === "string")
    {
        if (value === "")
        console.log('Who are you?');
        else
        console.log(`Hello ${value}!`);
    }
    else if (value === null)
    console.log('I am null and void');
    else if (isNaN(value) === false)
    {
        if (value < 0)
            console.log("I am Benjamin Button!");
        else
            console.log(`My age is ${value}`);
    }
    else if (isNaN(value))
        console.log("Age is just a number");
    else if (typeof value === "undefined")
    console.log('Nobody can define me!');
}

export default helloSomeone;