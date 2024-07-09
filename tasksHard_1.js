'use strict'

{
  const userIncomeAmount = parseInt(prompt('Введите ваш доход'));
  const smallIncome = userIncomeAmount * 0.13;
  const averageIncome = userIncomeAmount * 0.20;
  const highIncome = userIncomeAmount * 0.30;

  if (userIncomeAmount > 50000) {
    console.log('Налог ' , highIncome);
  } else if (userIncomeAmount >= 15000) {
    console.log('Налог ' , averageIncome);
  } else if (userIncomeAmount >= 0) {
    console.log('Налог ' , smallIncome);
  } else {
    console.log('Введите корректное значение');
  };
}