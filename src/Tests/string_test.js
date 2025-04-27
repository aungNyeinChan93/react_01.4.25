import chalk from "chalk";

let str = 'hello world';

let str_1 = new String('String One')

// usage
console.log(chalk.red(str.charAt(0)));                  // -> h

console.log(chalk.green(str_1.charCodeAt(0)));          // -> 83 is unicode value of the char S;

console.log(str.concat(str_1));                         // -> hello worldString One

console.log(str.includes('h', 0));                      // -> true

console.log(chalk.bgGreen(str.endsWith('d')));          // -> true

console.log(str.indexOf('o'));                          // -> 4

console.log(str.localeCompare(str_1));                  // -> -1

console.log(str.repeat(3));                             // -> hello worldhello worldhello world

console.log(str.trim());                                // remove whitespace

console.log(str.valueOf());                             // -> Primitive value of string

console.log(str.slice(0, 4));                           // -> hell
console.log(str);
console.log(str.substring(0, 3));                       // -> hel

console.log(str.split(' ', 2));                         // -> [ 'hello', 'world' ]
console.log(str.repeat(3).split('d', 4));               // -> [ 'hello worl', 'hello worl', 'hello worl', '' ]


// array
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.splice(0, 2));                         // -> [ 1, 2 ]
console.log(nums);                                      // -> [ 3, 4, 5, 6 ]
console.log(nums.join('*'));                            // -> 3*4*5*6

// Object 

let fun = new Object({ name: 'Mi' });
fun.price = 3000;
console.log(fun.valueOf());
console.log(fun.hasOwnProperty("price"));
console.log(fun.isPrototypeOf(Array));

console.log(Object.keys(fun));
console.log(Object.keys(fun).toString());

console.log(Object.values(fun));
console.log(Object.entries(fun));

console.log(fun.toLocaleString());

const [name, price] = Object.values(fun);
const { name: n, price: p } = fun
console.log(name, price);
console.log(p, n);

// bonus >>js is a prototype language

String.prototype.me = function () {
    console.log(chalk.bgGreenBright(this));
}
let test = new String('hey');
test.me();
str.me();

Array.prototype.concat = function () {
    console.log('this is overwrite to concat methods! ❌👎❌');

}
nums.concat();

Object.prototype.me = function () {
    return this
}

console.log(fun.me());
console.log(fun.me().name);

// Object literial
let quantity = 100;
const info = () => {
    return `this is info ${this?.name ?? 'unknow'}`
}

const phone = {
    name: 'I phone',
    quantity,
    info,
    callName() {
        return this.name
    }
}

console.log(Object.entries(phone));
console.log(phone.info());
console.log(phone.callName());








































