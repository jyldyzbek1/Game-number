// let min = 1,
//     max = 10,
//     winneringNum = 2,
//     guessesLeft = 3;

// const game = document.querySelector('#game'),
//       minNum = document.querySelector('.min-num'),
//       maxNum = document.querySelector('#guess-btn'),
//       guessInput = document.querySelector('#guess-input'),
//       message = document.querySelector('.massage');


// let min = 1,
//   max = 10,
//   winningNum = Math.floor(Math.random() * 10) + 1,
//   guessesLeft = 3;
// i = 1;

// const game = document.querySelector("#game"),
//   minNum = document.querySelector(".min-num"),
//   maxNum = document.querySelector(".max-num"),
//   guessBtn = document.querySelector("#guess-btn"),
//   guessInput = document.querySelector("#guess-input"),
//   message = document.querySelector(".message");

// minNum.textContent = min;
// maxNum.textContent = max;

// guessBtn.addEventListener("click", function () {
//   let guess = parseInt(guessInput.value);

//   if (guess === winningNum) {
//     guessInput.disabled = true;
//     guessInput.style.border = "1px solid green";
//     setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green");
//     guessBtn.textContent = "Новая игра";
//     guessBtn.addEventListener("click", newGame);
//   }
//   if (isNaN(guess) || guess < min || guess > max) {
//     setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
//     guessInput.value = "";
//   } else {
//     setMessage(
//       `${guess} - не угадали, осталось попыток: ${guessesLeft - i}`,
//       "red"
//     );
//     guessesLeft--;
//     guessInput.value = "";
//     if (guessesLeft === 0) {
//       guessBtn.textContent = "Новая игра";
//       guessInput.disabled = true;
//       setMessage(
//         `Игра окончена. Вы проиграли. Было загадано число: ${winningNum}`,
//         "red"
//       );
//       guessBtn.addEventListener("click", newGame);
//     }
//   }
// });

// function setMessage(msg, color) {
//   message.textContent = msg;
//   message.style.color = color;
// }
// function newGame() {
//   location.reload();
// }






// let min = 1,
//   max = 10,
//   winningNum = Math.floor(Math.random() * 10) + 1,
//   // winningNum = 2,
//   guessesLeft = 3;

// const game = document.querySelector("#game"),
//   minNum = document.querySelector(".min-num"),
//   maxNum = document.querySelector(".max-num"),
//   guessBtn = document.querySelector("#guess-btn"),
//   guessInput = document.querySelector("#guess-input"),
//   message = document.querySelector(".message");

// minNum.textContent = min;
// maxNum.textContent = max;

// guessBtn.addEventListener("click", function () {
//   let guess = parseInt(guessInput.value);

//   // validation
//   if (isNaN(guess) || guess < min || guess > max) {
//     setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
//   }

//   // check if won
//   if (guess === winningNum) {
//     guessInput.disabled = true;
//     guessInput.style.border = "1px solid green";
//     setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green");

//     guessBtn.textContent = "Новая игра";
//     if ((guessBtn.textContent = "Новая игра")) {
//       guessBtn.addEventListener("click", newGame);
//     }
//   } else if (guess !== winningNum && guess >= min && guess <= max) {
//     guessInput.style.border = "1px solid red";
//     reduceAttempts = attempts.textContent--; 
//     setMessage(
//       `${guess} - не угадали, осталось папыток: ${reduceAttempts} `,
//       "red"
//     );
    
//   }
//   if (reduceAttempts === 0) {
//     guessInput.disabled = true;
//     guessBtn.textContent = "Новая игра";
//     setMessage(
//       `Игра окончена, Вы проиграли.Было загадано число: ${winningNum}`
//     );
//     if ((guessBtn.textContent = "Новая игра")) {
//       guessBtn.addEventListener("click", newGame);
//     }
//   }

//   guessInput.value = "";
// });

// function setMessage(msg, color) {
//   message.textContent = msg;
//   message.style.color = color;
// }
// function newGame() {
//   location.reload();
// }

// const attempts = document.createElement("span");
// attempts.textContent = "2";
// attempts.style.display = "none";
// message.appendChild(attempts);






let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
  }

  if (guess === winningNum) {
    gameOver(true, `Поздравляю! Вы угадали число ${winningNum}`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(false, `Вы проиграли! Правильный ответ ${winningNum}`);
    } else {
      guessInput.style.border = "1px solid red";
      guessInput.value = "";
      setMessage(`${guess} - Неверно! У вас осталось ${guessesLeft} попыток`, "red");
    }
    
  }
});


game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

function gameOver(won, msg) {
  let color;
  if(won === true) {
    (color = "green") 
   }else {
    (color = "red");
   }

  guessInput.disabled = true;
  guessInput.style.border = `1px solid ${color}`;
  message.style.color = color;
  setMessage(msg);


  guessBtn.textContent = "Начать заново";
  guessBtn.className += "play-again";
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
