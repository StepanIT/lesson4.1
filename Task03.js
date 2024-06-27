'use strict'

const calculate = (sum, quantity, promokod) => {
  if (quantity > 10) {
    sum = sum - (sum * 0.03);
  } 
  if (sum - 30000 > 0) {
    sum = sum - ((sum - 30000) * 0.15);
  }
  if (promokod === 'METHED') {
    sum = sum - (sum * 0.1);
  } else if (promokod === 'G3H2Z1' && sum > 2000) {
    sum = sum - 500;
  } else {
    sum = sum;
  }
  return sum;
}

const totalDiscountAmount = calculate(40000, 10, 'METHED');
console.log('Сумма со скидкой:' , totalDiscountAmount);