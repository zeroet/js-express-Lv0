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

dynamicType.put(42);
dynamicType.change("Object as an Object");
dynamicType.printType();
dynamicType.change("Object as an Array");
dynamicType.printType();