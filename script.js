'use strict';

let lang = 'ru',
    ruWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    enWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === 'ru'){
  ruWeek.forEach(element => console.log(element));
}
else enWeek.forEach(element => console.log(element));

switch(lang) {
  case 'ru':
    ruWeek.forEach(element => console.log(element));
    break;
  case 'en':
    enWeek.forEach(element => console.log(element));
}

let week = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
week[lang].forEach(element => console.log(element));


let namePerson = 'Александр',
    result = namePerson === 'Артем' ? 'Директор' : namePerson === 'Александр' ? 'преподаватель' : 'студент';
console.log(result);