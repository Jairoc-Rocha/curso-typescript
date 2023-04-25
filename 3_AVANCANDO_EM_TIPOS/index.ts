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