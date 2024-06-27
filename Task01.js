'use strict'

const euroExchangeRate = (euro) => {
  let dollar = euro * 1.2;
  let ruble = dollar * 73;
  return ruble;
}

const res = euroExchangeRate(20);
console.log('ruble:' , res);