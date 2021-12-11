'use strict';
const dateOut = {
  fullDate: document.querySelector('.long-date'),
  shortDate: document.querySelector('.short-date'),
  
  longFormatDate: new Intl.DateTimeFormat('ru', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  shortFormatDate: new Intl.DateTimeFormat('ru', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  }),
  formatTime: new Intl.DateTimeFormat('ru', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }),

  getLongDateFormat (date){
    return this.longFormatDate.format(this.date);
  },

  getShortDateFormat(date){
    return this.shortFormatDate.format(date);
  },

  getShortTimeFormat(date){
   return this.formatTime.format(date);
  },

  num2str(n, textForms){  
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) { 
     return textForms[2];
    }
    if (n1 > 1 && n1 < 5) { 
      return textForms[1]; 
    }
    if (n1 === 1) { 
     return textForms[0]; 
    }
     return textForms[2];
  },
  outTime(){
    let date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        hourDeclension = ' ' + this.num2str(hour, ['час', 'часа', 'часов']) + ' ',
        minuteDeclension = ' ' + this.num2str(minute, ['минута', 'минуты', 'минут']) + ' ',
        secondDeclension = ' ' + this.num2str(second, ['секунда', 'секунды', 'секунд']) + ' '

    this.shortDate.innerHTML = this.getShortDateFormat(date) + ' - ' + this.getShortTimeFormat(date)
    this.fullDate.innerHTML = 'Сегодня ' + this.getLongDateFormat(date) + ', ' + hour + hourDeclension + minute +
    minuteDeclension + second + secondDeclension
  }
}

setInterval(function(){
  dateOut.outTime();
}, 1000);