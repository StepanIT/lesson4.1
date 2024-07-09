  'use strict'

{
  const enterUserIncome = parseInt(prompt('Введите ваш доход'));
  const smallIncome = enterUserIncome * 0.13;
  const averageIncome = (enterUserIncome - 15000) * 0.20;
  const highIncome = (enterUserIncome - 50000) * 0.30;

  if (enterUserIncome > 50000) {
    console.log('Налог:' , highIncome);
  } else if (enterUserIncome > 15000) {
    console.log('Налог:' , averageIncome);
  } else if (enterUserIncome >= 0) {
    console.log('Налог:' , smallIncome);
  } else {
    console.log('Введите корректное значение');
  };
}