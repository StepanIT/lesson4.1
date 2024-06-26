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
  const productTitle = prompt('productTitle');
  const productQuantity = prompt('productQuantity');
  const productCategory = prompt('productCategory');
  const productPrice = prompt('productPrice');

  console.log('productTitle: ' , productTitle);
  console.log('productQuantity: ' , productQuantity);
  console.log('productCategory: ' , productCategory);
  console.log('productPrice: ' , productPrice);

  console.log(typeof productTitle);
  console.log(typeof productQuantity);
  console.log(typeof productCategory);
  console.log(typeof productPrice);
}
