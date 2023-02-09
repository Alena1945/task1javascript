let numberToGuess = Math.floor(Math.random() * 1000);
console.log('Я загадал: ', numberToGuess);

while (true) {
    const numberFromUser = prompt('Введите число от 0 до 999:  ');
    console.log('Вы ввели: ', +numberFromUser);

    if (numberFromUser === 'q') {
        alert('Вы вышли из игры:(');
        break;
    }

    if (isNaN(numberFromUser)) {
        alert('Вы ввели не число!');
        continue;
    }

    if (+numberFromUser == numberToGuess) {
        alert('Вы угадали:)');
        break;
    } else if (+numberFromUser > numberToGuess) {
        alert('Попробуйте ввести число меньше')
    } else if (+numberFromUser < numberToGuess) {
        alert('Попробуйте ввести число больше')
    }
}
