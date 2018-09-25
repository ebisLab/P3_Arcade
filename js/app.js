// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.height = 65;
    this.width = 95;
};


Enemy.prototype.update = function(dt) {
    
};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//---HERO
var Player = function(x,y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.height = 75;
    this.width = 65;
};


Player.prototype.update = function(dt) {
    
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
  //boundary
  const horizontal = 101;
    vertical = 85;
  
   if (direction === 'left' && this.x - horizontal >= 0 ){
     this.x -= horizontal;
   } else if (direction === 'right' && this.x + horizontal < ctx.canvas.width){
     this.x += horizontal;
     
   } else if (direction === 'down' && this.y + vertical < ctx.canvas.height -200  ){
     this.y += vertical;
   } else if (direction === 'up' && this.y - vertical > 0 - player.height){
     this.y -= vertical;
   }
};





document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


const enemyPosition = [55, 140, 230];
const player = new Player(202, 404, 'images/char-pink-girl.png');
const allEnemies = enemyPosition.map((y, index)=> {
  return new Enemy((-200 *(index +1)), y); //enemy random
});