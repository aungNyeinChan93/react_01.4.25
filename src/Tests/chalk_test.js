import chalk from 'chalk'
import { log } from 'console'

const testStr = `this is test string`;

console.log(chalk.red(testStr));
console.log(chalk.bgRed(testStr));

log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// best usage
console.log(`My name is ${chalk.red('chan')}. I live in ${chalk.bgGreen('Yangon', '!', chalk.bgCyan('!!!!'))}`);