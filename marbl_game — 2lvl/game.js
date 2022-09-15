'use strict';
window.factory = (() => {
  let userPrint = '';
  let computerPrint = 0;
  let userChoice = 0;
  let computerChoice = 0;

  const result = {
    player: 5,
    computer: 5,
  };

  // check for isNaN and from 1 to result.player
  const checkPrintNumber = () => {
    if (Number.isNaN(userPrint) || !Number.isFinite(userPrint)) {
      userPrint = parseFloat(prompt(`Введите число корректно!`));
    } else if (!(userPrint >= 1 && userPrint <= result.player)) {
      userPrint = parseFloat(prompt(
        `Введите число от 1 до ${result.player}!`));
    }
    return userPrint;
  };

  // comp guess %2
  const getCompChoice = (min = 0, max = 1) => Math.round(min +
    Math.random() * (max - min));

  // comp print from 1 to result.computer
  const getComputerPrint = (min = 1, max = result.computer) =>
    Math.round(min + Math.random() * (max - min));

  // rules
  const rulesComputerChoice = () => {
    if ((computerChoice && userPrint % 2 === 0) ||
      (!computerChoice && userPrint % 2 !== 0)) {
      result.player -= userPrint;
      result.computer += userPrint;
    }
    if ((!computerChoice && userPrint % 2 === 0) ||
      (computerChoice && userPrint % 2 !== 0)) {
      result.player += userPrint;
      result.computer -= userPrint;
    }
  };

  const rulesUserChoice = () => {
    if ((userChoice && computerPrint % 2 === 0) ||
      (!userChoice && computerPrint % 2 !== 0)) {
      result.player += computerPrint;
      result.computer -= computerPrint;
    }
    if ((!userChoice && computerPrint % 2 === 0) ||
      (userChoice && computerPrint % 2 !== 0)) {
      result.player -= computerPrint;
      result.computer += computerPrint;
    }
  };

  const numAlert = () => {
    alert(`У вас шариков: ${result.player} шт.`);
  };

  const overGameAlert = () => alert(`Игра окончена.
      Счёт Игрок ${result.player}: Компьютер ${result.computer}`);

  console.log('userPrint: ', userPrint);
  console.log('userChoice: ', userChoice);

  const game = () => {
    userPrint = parseFloat(prompt(`Введите число от 1 до ${result.player}`));
    checkPrintNumber();
    if (Number.isNaN(userPrint) ||
      !(userPrint >= 1 && userPrint <= result.player)) {
      overGameAlert();
    } else {
      if (!(result.player <= 0 || result.computer <= 0)) {
        computerChoice = getCompChoice();
        console.log('computerChoice: ', computerChoice);
        rulesComputerChoice();
        numAlert();
        console.log('result: ', result);
      } else {
        overGameAlert();
        return;
      }

      if (!(result.player <= 0 || result.computer <= 0)) {
        computerPrint = getComputerPrint();
        console.log('computerPrint: ', computerPrint);
        userChoice = confirm(
          `Компьютер загадал число: 
            Четное - 'OK'  или   Нечетное - 'Отмена'?`);
        rulesUserChoice();
        numAlert();
        console.log('result: ', result);
      } else {
        overGameAlert();
        return;
      }
      return game();
    }
  };
  return {
    game,
  };
})();
