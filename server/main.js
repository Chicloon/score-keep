import '../imports/utils.js';
import someDefault, { greetUser } from '../imports/utils.js';
import add  from '../imports/math';

console.log(add(2,2));
console.log('Log from ./server/main.js');

console.log(greetUser(), someDefault);
