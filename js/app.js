// Enemies our player must avoid
var Enemy = function() {
   
    this.sprite = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {
    
};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//---HERO
var Player = function() {
   
    this.sprite = 'images/char-pink-girl.png';
};


Player.prototype.update = function(dt) {
    
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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


const player = new Player();
const allEnemies = [];