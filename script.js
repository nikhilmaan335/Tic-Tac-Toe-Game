let boxes = document.querySelectorAll(".box"),
  resetBtn = document.querySelector("#reset-btn"),
  newGameBtn = document.querySelector("#new-btn"),
  msgContainer = document.querySelector(".msg-container"),
  msg = document.querySelector("#msg"),
  turnO = false;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function resetGame() {
  turnO = false;
  enableBoxes();
  msgContainer.classList.add("hide");
}

for (box of boxes) {
  box.addEventListener("click", function () {
    if (turnO) {
      this.innerText = "O";
      turnO = false;
    } else {
      this.innerText = "X";
      turnO = true;
    }
    this.disabled = true;
    checkWinner();
  });
}

function disableBoxes() {
  for (box of boxes) {
    box.disabled = true;
  }
}

function enableBoxes() {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

function showWinner(winner) {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

function checkWinner() {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
