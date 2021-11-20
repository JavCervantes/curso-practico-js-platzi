let nombre = 'oscar';
let edad = 32;

// es5
obj = {nombre: nombre, edad: edad};
console.log(obj);

// es5
obj2 = {nombre, edad};
console.log(obj2);
//-------------------------------------------------------------
class calculator {
    constructor(a = 0, b = 0) {
        this.valueA = a;
        this.valueB = b;
    }
    sum(){
        return this.valueA + this.valueB;
    }
}

const calc = new calculator(5);
console.log(calc);

calc.valueB=6;
console.log(calc.sum());

