  'use strict'

  const rain = Math.random();
  
  // console.log('rain:' , Math.round(rain));

  if (Math.round(rain) === 1) {
    console.log('Пошёл дождь. Возьмите зонт!')
  }

  if (Math.round(rain) === 0) {
    console.log('Дождя нет!')
  }