var gameStarted = false;

$( document ).ready(function() {
    showIntro();

    // Start game on spacebar press.
    this.onkeypress = function(e) {
      if (gameStarted == false && e.keyCode == 32) { // 32 = Spacebar
        gameStarted = true;
        gamerun();
      }
    }

});

function gamerun() {
  init();
}

function step(){
  update();
  draw();
}

function update() {
  if (!movesnake()) {
    die();
    showConclusion(size)
  }
}

function draw() {
  if (gameStarted) {
      screenclear();
      drawsnake();
      drawfood();
  }
}

function showIntro() {
    var canvas = document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.font="30px Courier New";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("SNAKE", canvas.width/2, canvas.height/2);

    ctx.font="20px Courier New";
    ctx.fillText("press space to start", canvas.width/2, canvas.height/2+40);
}

function showConclusion(score) {
    screenclear();
    var canvas = document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.font="30px Courier New";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER Better Luck Next Time", canvas.width/2, canvas.height/2);
    ctx.fillText("score: " + score, canvas.width/2, canvas.height/2-40);
    ctx.font="20px Courier New";
    ctx.fillText("press space to start", canvas.width/2, canvas.height/2+80);
}