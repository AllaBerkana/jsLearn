'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const game = () => {
    let userPrint = '';
    let computerPrint = '';
    const a = 'к'; const b = 'н'; const c = 'б';

    const result = {
      player: 0,
      computer: 0,
    };

    // рандом компьютера
    const getRandomComp = (arr) => computerPrint =
      arr[Math.floor(Math.random() * arr.length)].slice(0, 1);

    // фция confirm
    const promptRes = () => {
      userPrint = confirm(
        `Продолжаем? Игрок ${result.player} : Компьютер ${result.computer}`);
    };

    // правила начисления
    const rules = () => {
      if (userPrint === a) {
        if (computerPrint === b) {
          result.player++;
        } else if (computerPrint === c) {
          result.computer++;
        } else {
          console.log('Ничья');
        }
      }
      if (userPrint === b) {
        if (computerPrint === a) {
          result.computer++;
        } else if (computerPrint === c) {
          result.player++;
        } else {
          console.log('Ничья');
        }
      }
      if (userPrint === c) {
        if (computerPrint === a) {
          result.player++;
        } else if (computerPrint === b) {
          result.computer++;
        } else {
          console.log('Ничья');
        }
      }
    };

    // итоговый счёт
    const getScore = () => {
      if (result.player > result.computer) {
        alert(`Выиграл игрок! Счёт: ${result.player} : ${result.computer}`);
      } else if (result.player < result.computer) {
        alert(
          `Выиграл компьютер! Счёт: ${result.computer} : ${result.player} `);
      } else {
        alert(`Ничья! Счёт: ${result.player} : ${result.computer}`);
      }
    };

    return function start() {
      // here game

      // старт
      const getLetter = () => {
        userPrint = prompt('Вперёд! Камень, ножницы, бумага?');
        computerPrint = getRandomComp(FIGURES_RUS);

        // проверка на null
        if (userPrint === null) {
          console.log('exit');

          alert(`Игра окончена! Игрок ${result.player} : Компьютер ${result.computer}`);
          return;
        } else {
          userPrint.trim().slice(0, 1).toLowerCase();

          // перебор массива на первую букву
          const firstLetter = FIGURES_RUS.map((item) => {
            const obj = {
              item: item[0],
            };
            return obj.item;
          });

          // проверка наличия буквы в набранном слове
          if (firstLetter.indexOf(userPrint) !== -1) {
            console.log(userPrint, computerPrint);
            rules();
            promptRes();
          } else {
            userPrint = prompt('Наберите правильно слово');
            promptRes();
          }

          if (userPrint === false) {
            console.log('exit confirm');
            alert(`Игра окончена! Игрок ${result.player} : Компьютер ${result.computer}`);
            return;
          }
          getLetter();
        }
      };

      getLetter();
      getScore();

      console.log('userPrint, computerPrint: ', userPrint, computerPrint);
      console.log(result.player, result.computer);
    };
  };

  window.RPS = game;
})();
