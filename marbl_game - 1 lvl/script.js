'use strict';

//print
let userPrint = +prompt('Введите число от 1 до 5');
let computerPrint = +'';

console.log('userPrint: ', userPrint);

//check for isNaN
const checkNaN = () => {
    if (Number.isNaN(parseFloat(userPrint)) ||
        !Number.isFinite(userPrint)) {
        userPrint = +prompt('Введите число правильно.');
    }
};

const game = () => {
    //result
    const result = {
        player: 5,
        computer: 5,
    };

    if (userPrint === 0) {
        console.log('exit');
        alert(`Игра окончена.
        Счёт Игрок ${result.player}: Компьютер ${result.computer}`);
        return;
    } else {
        checkNaN();

        //random %2   1 or 2
        const getCompRandom = (min, max) => {
            return Math.round(min + Math.random() * (max - min));
        };
        const compRandom = getCompRandom(1, 2);
        console.log('compRandom: ', compRandom);

        //фция колва шариков
        const numBall = () => {
            if (result.player <= 0 || result.computer <= 0) {
                alert(`Игра окончена.
            Счёт Игрок ${result.player}: Компьютер ${result.computer}`);
                return;
            } else {
                userPrint = +prompt(`У вас шариков: ${result.player} шт.
                Введите число.`);
            }
        }

        //правила начисления
        const rules = () => {
            if ((compRandom === 1 && userPrint % 2 === 0) ||
                (compRandom === 2 && userPrint % 2 !== 0)) {
                result.player += userPrint;
                result.computer -= userPrint;
                console.log(result.player, result.computer);
                numBall();

            }
            if ((compRandom === 2 && userPrint % 2 === 0) ||
                (compRandom === 1 && userPrint % 2 !== 0)) {
                result.player -= userPrint;
                result.computer += userPrint;
                console.log(result.player, result.computer);
                numBall();
            }

        };
        rules();

        console.log('result.player: ', result.player);

        //if result === 0   end рекурсия
        if (result.player <= 0 || result.computer <= 0) {
            return;
        } else {
            return game();
        }
    }
};
game();