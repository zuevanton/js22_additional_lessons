'use strict';

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      div = document.createElement('div'),
      date = new Date();

function createDay(day, num){
  // если попадаем на субботу и вскр, то выводим их Ж и К
  if (num === date.getDay() && (date.getDay() === 6 || date.getDay() === 0)){
    div.innerHTML += '<p><b><i>' + day + '</i></b></p>';
  }
  // если суббота или вскр, то делаем их К
  else if (num === 0 || num === 6){
    div.innerHTML += '<p><i>' + day + '</i></p>';
  }
  // если попадаем на день, то делаем Ж
  else if(num === date.getDay()){
    div.innerHTML += '<p><b>' + day + '</b></p>';
  }
  // выводим без всего
  else {
    div.innerHTML += '<p>' + day + '</p>';
  }
}

for(let i = 1; i < week.length; i++){
  createDay(week[i], i);
}
createDay(week[0], 0);
document.body.append(div);