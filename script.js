'use strict';

const func = (arg) => {
  if (typeof arg != 'string'){
    return 'передана не строка'
  }
  arg = arg.trim()
  if (arg.length > 30) {
    arg = arg.slice(0, 30);
    return arg + '...';
  }
  return arg
}

console.log(func(1))
console.log(func('   asdasdasdjknasdjkjnkasdkjnasdkjnasdnjkasdnkjasknjadsknjasdknj    '));