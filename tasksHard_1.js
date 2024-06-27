 'use strict'

{
  const userIncomeAmount = parseInt(prompt('Введите ваш доход'));
  const smallIncome = userIncomeAmount * 0.13;
  const averageIncome = userIncomeAmount * 0.20;
  const highIncome = userIncomeAmount * 0.30;

  if (userIncomeAmount <= 15000 && userIncomeAmount > 0) {
    console.log('Налог ' , smallIncome);
  }

  if (userIncomeAmount >= 15000 && userIncomeAmount <= 50000) {
    console.log('Налог ' , averageIncome);
  }

  if (userIncomeAmount > 50000) {
    console.log('Налог ' , highIncome);
  }

  if (userIncomeAmount <= 0) {
    console.log('Введите сумму больше 0');
  }
}