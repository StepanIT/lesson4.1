'use strict'

const changeString = (line) => {
  let newLine = line.charAt(0).toUpperCase() + line.slice(1).toLowerCase();
  return newLine;
}

const resultOfChangingTheString = changeString('привет Мир');
console.log('newLine:' , resultOfChangingTheString);