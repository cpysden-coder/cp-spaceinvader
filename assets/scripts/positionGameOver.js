//---- game over position ---//

class GameOverPosition {
    constructor() {
    }
    draw(play) {
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.font = "40px Comic Sans MS";
        ctx.textAlign = "center";
        ctx.fillStyle = "ffffff";
        ctx.fillText("Game Over!", play.width / 2, play.height / 2 - 120);

        ctx.font = "36px Comic Sans MS";
        ctx.fillStyle = "D7DF01";
        ctx.fillText("You've reached Level: " + play.level + " and your Score is: " + play.score + ".", play.width / 2, play.height / 2 - 40);

        ctx.font = "36px Comic Sans MS";
        ctx.fillStyle = "D7DF01";
        ctx.fillText("Press 'Spacebar' to continue.", play.width / 2, play.height / 2 + 40);
    }
    keyDown(play, keyboardCode) {
        if (keyboardCode == 32) {
            play.goToPosition(new OpeningPosition());
        }
    }
};



