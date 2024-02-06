// const firstName: string = "Dylan"; 
// console.log(firstName);
// const age: number = 23; 
// console.log(age);
// const passed: boolean = true; 
// console.log(passed);
// const anyDisease: null = null; 
// console.log(anyDisease);
// const address: any = "chennai-6003"; 
// console.log(address);
// console.log(typeof address);
// const phoneNumber: any = 9998087887; 
// console.log(phoneNumber);
// console.log(typeof phoneNumber);
// const isAlive: any = true; 
// console.log(isAlive);
// console.log(typeof isAlive);
// const value: undefined = undefined; 
// console.log(value);
// constx: never = true;
// const number: readonly number[] = [23,45];
// number.push(23);
// const number:  number[] = [23,45];
// number.push(23);
// console.log(number);
// const numbers = [10,20];
// numbers.push(30);
// const head: number = numbers[0];
// console.log(head);
// const ourTuple: [number, boolean,number] = [1,true,23];
// ourTuple.push(true);
// console.log(ourTuple);
// const car: { type: string, model: string, year: number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
//   };
//   console.log(car);
// const car: { type: string, mileage?: number } = { 
//     type: "Toyota"
//   };
//   car.mileage = 2000;
//   console.log(car);
///enum
// enum CardinalDirections {
//     North,
//     East,                                   ?????????????Type Aliases,enum
//     South,
//     West
//   }
//   let currentDirection = CardinalDirections.North;
// currentDirection = 1;
// console.log(currentDirection);
// interface Rectangle {
//     height: number,
//     width: number
//   }
//   interface ColoredRectangle extends Rectangle {
//     color: string
//   }
//   const coloredRectangle: ColoredRectangle = {
//     height: 20,
//     width: 10,
//     color: "red"
//   };
//   console.log(coloredRectangle);
// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
//   printStatusCode(404);
//   printStatusCode('404');
// function getTime(): number {
//     return new Date().getTime();
//   }
//   console.log(getTime());
// let x: unknown = 'hello';
// console.log((x as string).length);
var a = 1235678765432356n;
var b = 2345678765433456n;
var sum = (a + b);
console.log(sum);
