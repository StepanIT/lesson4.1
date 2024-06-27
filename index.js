  'use strict'
  
{
  const productTitle = 'Куртка';
  const productQuantity = '3';
  const productCategory = 'Одежда';
  const productPrice = '6000';
  const totalPrice = productPrice * productQuantity;
  
  console.log('productTitle: ' , productTitle);
  console.log('totalPrice: ' , totalPrice);
}

{
  const productTitle = prompt('Наименование товара');
  const productQuantity = prompt('Количество товара');
  const productCategory = prompt('Категория товара');
  const productPrice = prompt('Цена товара');
  const totalPrice = productPrice * productQuantity;

  console.log('Наименование товара: ' , productTitle);
  console.log('Количество товара: ' , +productQuantity);
  console.log('Категория товара: ' ,  productCategory);
  console.log('Цена товара: ' ,  +productPrice);

  console.log(typeof productTitle);
  console.log(typeof +productQuantity);
  console.log(typeof productCategory);
  console.log(typeof +productPrice);

  console.log(`"На складе ${productQuantity} единицы товара "${productTitle}" на сумму ${totalPrice} деревянных"`);
}