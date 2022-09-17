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
    if (step === 0) {
      if ((userChoice % 2 === 0 && compChoice) ||
        (!userChoice % 2 === 0 && !compChoice)) {
        result.player -= userChoice;
        result.computer += userChoice;
      } else {
        result.computer -= userChoice;
        result.player += userChoice;
      }
    } else {
      if ((compChoice % 2 === 0 && userChoice) ||
        (!compChoice % 2 === 0 && !userChoice)) {
        result.computer -= compChoice;
        result.player += compChoice;
      } else {
        result.player -= compChoice;
        result.computer += compChoice;
      }
    }
    alert(`У вас шариков: ${result.player} шт.`);
    return result;
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

    // написать фцию, края будет подсчитывать результат и возвращать в result
    getScores(userChoice, compChoice, step);

    step = step === 0 ? 1 : 0;
    return game(step);
  };
  game();
};
