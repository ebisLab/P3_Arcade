// This is the enemy class; it determines what enemies looks like and
// regulates where they may be located on the canvas
let game = true;

var Enemy = function(x,y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.height = 65;
    this.width = 95;
    this.collision = false;
};

// Updates the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // any movement is multiplied by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  this.x += 150 *dt;
  
  // each bug resets and goes back to the starting position when it
    // reaches the end of the canvas
  if (this.x  > ctx.canvas.width + this.width){
    this.x = -200 * Math.floor(Math.random()* 4)+1;
  } else {
    this.x += 150 *dt;
  }
  
/*if (collision(player.x < Enemy.x + Enemy.width && 
    player.x + player.width > Enemy.x &&
    player.y < Enemy.y < Enemy.height &&
    player.height + player.y > Enemy.y) ){

    this.collision = true;

    //reset player

    if (player) {
        player.x = 202;
        player.y =400;
    } else {
        this.collision = false;
    }

  }*/

  
  //collision logic
  if (collision(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
    this.collision = true;
   //reset player position 
    if (player) {
      player.x = 202;
      player.y = 400;
    } else {
    this.collision = false;
  }
}


};

// Draws the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


/// ---- PLAYER -----


// This is the player class; it determines what the character looks like and
// where it is located on the canvas
var Player = function(x,y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.height = 75;
    this.width = 65;
};


//Winner logic 

Player.prototype.update = function(dt) {
   if (game && player.y < 40){
    game = false;
    won();
   }
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(movement) {
  //boundary and player moves
  const horizontal = 101;
    vertical = 85;
  
   if (movement === 'left' && this.x - horizontal >= 0 ){
     this.x -= horizontal;
   } else if (movement === 'right' && this.x + horizontal < ctx.canvas.width){
     this.x += horizontal;
     
   } else if (movement === 'down' && this.y + vertical < ctx.canvas.height -200  ){
     this.y += vertical;
   } else if (movement === 'up' && this.y - vertical > 0 - player.height){
     this.y -= vertical;
   }
};


/* listens for key presses and sends the keys to the Player.handleInput()
 * method
 */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//array of bugs

const enemyPosition = [55, 140, 100];
const player = new Player(202, 404, 'images/char-pink-girl.png');

let allEnemies = enemyPosition.map((y, index)=> {
  return new Enemy((-200 *(index +1)), y); //enemy random
});

function won() {
    reset();
    alert('You won! Congratulations!');
}

function reset(){
    allEnemies = [];

}

//Logic provided by @LLoan from Slack
function collision(px, py, pw, ph, ex, ey, ew, eh) {
  
  return (Math.abs(px -ex)*2 <pw +ew) && (Math.abs(py -ex)*2 < ph + eh);
}

