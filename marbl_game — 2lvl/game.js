'use strict';

(
  () => {
    let userPrint = parseFloat(prompt('Введите число от 1 до 5'));
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
        userPrint = parseFloat(prompt('Введите число!'));
      } else if (!(userPrint >= 1 && userPrint <= result.player)) {
        userPrint = parseFloat(prompt(
          `Введите число от 1 до ${result.player}!`));
      }
      return userPrint;
    };

    // comp guess %2
    const getCompChoice = (min, max) => Math.round(min +
      Math.random() * (max - min));

    // comp print from 1 to result.computer
    const getComputerPrint = (min, max) => Math.round(min +
      Math.random() * (max - min));

    // user guess %2
    const getUserChoice = () => {
      if (userChoice) {
        userChoice = 2;
      } else {
        userChoice = 1;
      }
      return userChoice;
    };

    // rules
    const rulesComputerChoice = () => {
      if ((computerChoice === 2 && userPrint % 2 === 0) ||
        (computerChoice === 1 && userPrint % 2 !== 0)) {
        result.player -= userPrint;
        result.computer += userPrint;
      }
      if ((computerChoice === 1 && userPrint % 2 === 0) ||
        (computerChoice === 2 && userPrint % 2 !== 0)) {
        result.player += userPrint;
        result.computer -= userPrint;
      }
    };

    const rulesUserChoice = () => {
      if ((userChoice === 2 && computerPrint % 2 === 0) ||
        (userChoice === 1 && computerPrint % 2 !== 0)) {
        result.player += computerPrint;
        result.computer -= computerPrint;
      }
      if ((userChoice === 1 && computerPrint % 2 === 0) ||
        (userChoice === 2 && computerPrint % 2 !== 0)) {
        result.player -= computerPrint;
        result.computer += computerPrint;
      }
    };

    const numAlert = () => {
      alert(`У вас шариков: ${result.player} шт.`);
    };

    console.log('userPrint: ', userPrint);
    console.log('userChoice: ', userChoice);

    checkPrintNumber();

    const game = () => {
      if (Number.isNaN(userPrint) ||
        !(userPrint >= 1 && userPrint <= result.player)) {
        return alert(`Игра окончена.
                Счёт Игрок ${result.player}: Компьютер ${result.computer}`);
      } else {
        const userStep = () => {
          computerChoice = getCompChoice(1, 2);
          console.log('computerChoice: ', computerChoice);
          rulesComputerChoice();
          numAlert();
          console.log('result: ', result);
          return result;
        };

        const computerStep = () => {
          computerPrint = getComputerPrint(1, result.computer);
          console.log('computerPrint: ', computerPrint);
          userChoice = confirm(
            'Какое число загадал компьютер? OK - Четное, Отмена - Нечетное');
          getUserChoice();
          rulesUserChoice();
          numAlert();
          console.log('result: ', result);
          return result;
        };

        userStep();
        computerStep();

        if (result.player <= 0 || result.computer <= 0) {
          return alert(`Игра окончена.
                    Счёт Игрок ${result.player}: Компьютер ${result.computer}`);
        } else {
          userPrint = parseFloat(prompt('Введите число'));
          return game();
        }
      }
    };
    console.log('game(): ', game());
    window.marbles = game;
  }
)();
