while (true) {
    let numberToGuess = Math.floor(Math.random() * 1000);
    console.log('Я загадал: ', numberToGuess);

    const numberFromUser = prompt('Введите число от 0 до 999:  ');
    console.log('Вы ввели: ', +numberFromUser);
    
    if (numberFromUser > numberToGuess) {
        numberToGuess--;
        alert('Попробуйте ввести число меньше', numberFromUser);
    } else {
        numberToGuess++;
        alert('Попробуйте ввести число больше', numberFromUser);
    }
    if (numberFromUser === 'q') {
        alert('Вы вышли из игры:(');
        break
    }
    if (isNaN(numberFromUser)|| (numberFromUser !== 0 && +numberFromUser !== 1)) {
        alert('Вы ввели не число!');
    } else if (+numberFromUser == numberToGuess) {
        alert('Вы угадали:)');
    } else {
        alert('Вы не угадали:(');
    }
}
