'use strict'

const changeString = (line) => {
  let newLine = line.charAt(0).toUpperCase() + line.slice(1);

  console.log('newLine:' , newLine);
}

changeString('привет Мир')