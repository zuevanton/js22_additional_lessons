let num = 266219,
    str = num + '',
    result = 1;

for(let n of str) {
  result *= n;
}
console.log(`умножение всех чисел в числе ${num} = ${result}`);
console.log((result ** 3 + '').substr(0, 2));