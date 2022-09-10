'use strict';

{
  /*
  Задача #1

  Переписать игровой бот из 8-го задания
  Функционал остаётся прежний, но вместо цикла (while или for) 
  используйте рекурсию
  */
}

{
  let userSaid = parseFloat(prompt('Число от 1 до 100'));

  let randomNumber = Math.ceil(Math.random() * 100);
  console.log('randomNumber: ', randomNumber);

  if (Number.isNaN(userSaid)) {
    userSaid = parseFloat(prompt('Введи число!'));
  }

  const checkNum = (num) => {
    if (Number.isNaN(num)) {
      return;
    }

    if (num !== randomNumber) {
      if (num > randomNumber) {
        num = parseFloat(prompt('Меньше!'));
      }
      if (num < randomNumber) {
        num = parseFloat(prompt('Больше!'));
      }
      return checkNum(num);
    }

    alert('Правильно!' + ' ' + num);
    return num;
  };

  const num = checkNum(userSaid);

  if (num === undefined) {
    alert('Game is over');
  }
}

{
  /*
  Задача #2

  Напишите рекурсивную функцию, которая принимает один параметр массив,
  генерирует целое число от 0 до 10 включительно и 
  добавляет его в массив.
  Каждый раз после добавления нового числа проверяет
  сумму элементов массива,
  если она меньше 50 запускается снова передавая себе массив
  Если сумма больше 50-ти, то функция возвращает этот массив.
   */
}

{
  const generateArr = (arr = []) => {
    const varRandom = (num) => Math.round(Math.random() * num);
    let randomNum = varRandom(10);
    // console.log('randomNum: ', randomNum);

    arr.push(randomNum);
    const sumArr = arr.reduce((sum, item) => sum + item, 0);
    if (sumArr > 50) return arr;
    else return generateArr(arr);
  };

  const generatedArr = generateArr();
  console.log('generatedArr: ', generatedArr);
}

// цикл с не рандомным числом (на память)
{
  const arrNum = [];
  const sumNum = (arr) => {
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
      sum += i;
      if (sum <= 50) {
        arr.push(i);
      }
    }
    return arr;
  };
  console.log('sumNum: ', sumNum(arrNum));
}
