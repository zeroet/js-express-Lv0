const dynamicType = {
    value : undefined,
    put : (number) => {
        if (typeof number == "number")
            this.value = number;
    },
    change : (option) => {
        if (typeof this.value === undefined)
            return ; 
        else if (option === "Array")
            this.value = String(this.value);
        else if (option === "Number")
            this.value = Number(this.value);
        else if (option === "Object as an Object")
            this.value = Object(this.value);
        else if (option === "Object as an Array")
            this.value = Object.values(this.value);
    },
    printType : () => {
        if (this.value !== "undefined")
            console.log(this.value);
    }
}

let type = dynamicType;

type.put(42);
type.change("Array");
type.printType();
type.change("Number");
type.printType();
type.change("Object as an Object");
type.printType();
type.change("Object as an Array");
type.printType();