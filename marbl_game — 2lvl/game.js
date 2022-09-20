export const marbleGame = () => {
  const result = {
    player: 5,
    computer: 5,
  };

  const isNumber = (num) => !isNaN(parseFloat(num)) && isFinite(num);

  // check for isNaN and from 1 to result.player
  const checkPrintNumber = (resultPlayer) => {
    const setNum = prompt(`Введите число от 1 до ${resultPlayer}!`);
    if (setNum === null) return null;
    if (!isNumber(setNum) || setNum > resultPlayer) {
      alert(`Введено некорректное число`);
      return checkPrintNumber(resultPlayer);
    }
    return parseInt(setNum);
  };

  const getCompChoice = (min = 0, max = 1) => Math.round(min +
    Math.random() * (max - min));

  const scoring = (player, comp) => {
    if (player <= 0) return `Игра окончена. Победил компьютер. Счет ${comp} : ${player}`;
    if (comp <= 0) return `Игра окончена. Победил игрок. Счет ${player} : ${comp}`;
    return false;
  };

  const getScores = (userChoice, compChoice, step) => {
    const countResults = (choiceNum, guessNum) => {
      if ((choiceNum % 2 === 0 && guessNum) ||
        (choiceNum % 2 !== 0 && !guessNum)) {
        result.player -= choiceNum;
        result.computer += choiceNum;
      } else {
        result.computer -= choiceNum;
        result.player += choiceNum;
      }
    };

    if (step === 0) {
      countResults(userChoice, compChoice);
    } else {
      countResults(compChoice, userChoice);
    }
    alert(`У вас шариков: ${result.player} шт.`);
  };

  const game = (step = 0) => {
    let userChoice;
    let compChoice;

    // проверка результатов: если кто-то победил, то завершаем игру
    const resScoring = scoring(result.player, result.computer);
    if (resScoring) {
      alert(resScoring);
      return true;
    }

    if (step === 0) {
      userChoice = checkPrintNumber(result.player);
      if (userChoice === null) return alert('Игра закончена');
      compChoice = getCompChoice(0, 1);
    } else {
      compChoice = getCompChoice(1, result.computer);
      userChoice = confirm(
        `Компьютер загадал число:
          Четное - 'OK'  или   Нечетное - 'Отмена'?`);
    }

    // фция, края будет подсчитывать результат
    getScores(userChoice, compChoice, step);

    step = step === 0 ? 1 : 0;
    return game(step);
  };
  game();
};
