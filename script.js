'use strict';
// 1 задание
let arr = ['876', '2987', '9123', '4987', '24375', '52947', '78123'];
arr.forEach(function(el){
  if(el.slice(0, 1) === '2' || el.slice(0, 1) === '4'){
    console.log(el);
  }
});

// 2 задание
let k = 2;
for(let i = 2; i < 100; i++){
  for(k = 2; k <= i; k++){
    if (i % k === 0){
      break;
    }
  }
  if (k === i){
    console.log('делитель числа ' + i + ': 1 и ' + i);
  }
}