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

  const getScores = (numChoice, numGuess, step, numFirst, numSecond) => {
    if ((numChoice % 2 === 0 && numGuess ||
      (numChoice % 2 !== 0 && !numGuess))) {
      numFirst -= numChoice;
      numSecond += numChoice;
    } else {
      numSecond -= numChoice;
      numFirst += numChoice;
    }

    if (step === 0) {
      result.player = numFirst;
      result.computer = numSecond;
    } else {
      result.player = numSecond;
      result.computer = numFirst;
    }
    console.log('result: ', result);
    return result;
  };

  const game = (step = 0) => {
    let numChoice;
    let numGuess;
    let numFirst;
    let numSecond;

    // проверка результатов: если кто-то победил, то завершаем игру
    const resScoring = scoring(result.player, result.computer);
    if (resScoring) {
      alert(resScoring);
      return true;
    }

    if (step === 0) {
      numChoice = checkPrintNumber(result.player);
      if (numChoice === null) return alert('Игра закончена');
      numGuess = getCompChoice(0, 1);
      numFirst = result.player;
      numSecond = result.computer;
      console.log('0-1', numChoice, numGuess);
    } else {
      numChoice = getCompChoice(1, result.computer);
      numGuess = confirm(
        `Компьютер загадал число:
          Четное - 'OK'  или   Нечетное - 'Отмена'?`);
      numFirst = result.computer;
      numSecond = result.player;
      console.log('0-1', numChoice, numGuess);
    }

    // написать фцию, края будет подсчитывать результат и возвращать в result
    getScores(numChoice, numGuess, step, numFirst, numSecond);
    alert(`У вас шариков: ${result.player} шт.`);
    step = step === 0 ? 1 : 0;

    return game(step);
  };
  game();
};
