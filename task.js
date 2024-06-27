  'use strict'

{
  const rain = Math.random();
  
  // console.log('rain:' , Math.round(rain));

  if (Math.round(rain) === 1) {
    console.log('Пошёл дождь. Возьмите зонт!')
  }

  if (Math.round(rain) === 0) {
    console.log('Дождя нет!')
  }
}
  
// {
//   const numberOfPointsInMathematics = parseInt(prompt('Введите кол-во баллов по математике:'));
//   const numberOfPointsInRussianLanguage = parseInt(prompt('Введите кол-во баллов по русскому языку:'));
//   const numberOfPointsInComputerScience = parseInt(prompt('Введите кол-во баллов по информатике:'));
//   const totalPoints = numberOfPointsInMathematics + numberOfPointsInRussianLanguage + numberOfPointsInComputerScience;

//   if (totalPoints >= 265) {
//     console.log('Поздравляю, вы поступили на бюджет!');
//   } else {
//     console.log('Увы, вам не хватило баллов')
//   }
// }

{
  const amountOfMoney = parseInt(prompt('Сколько денег вы хотите снять?'));

  if (amountOfMoney % 100 === 0 && amountOfMoney > 0) {
    console.log('Вы можете снять деньги')
  } else {
    console.log('Введите сумму кратную 100')
  }
}