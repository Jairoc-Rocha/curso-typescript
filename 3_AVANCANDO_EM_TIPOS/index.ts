// 1 - Arrays
let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);

let nomes: string[] = ["Matheus", "João"];


// 2 - outra sintaxe array
let nums: Array<number> = [10, 20, 30, 40];
nums.push(50);
console.log(nums[3]);
console.log(nums.length);

// 3 - any
let arr1: any = [1, "teste", true, {nome: "Matheus"}];
console.log(arr1[2]);

// 4 - parâmetros de funções tipados
function soma(a: number ,b: number) {
    console.log(a + b);
}
soma(4, 5);

// 5 - Retorno de funções tipado
function greeting(name: string): string {
    return `Olá ${name}`;
}
console.log(greeting("Matheus"));
//console.log(greeting(5));

// 6 - Funções anônimas
setTimeout(function() {
    let sallary: number = 5000;
    //console.log(sallary);
},2000)

// 7 - Tipos de objetos
function passCoordinates(coord: {x: number, y: number}) {
    console.log("x coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}

const objCoordinates = {x: 329, y: 84.2}
passCoordinates(objCoordinates);