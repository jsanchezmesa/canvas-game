function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");

  this.reset();
}

Game.prototype.start = function() {
};

Game.prototype.stop = function() {
};

Game.prototype.gameOver = function() {
  this.stop();
  
  if(confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
  }
};

Game.prototype.reset = function() {
};

Game.prototype.isCollision = function() {
};

Game.prototype.clearObstacles = function() {
};

Game.prototype.generateObstacle = function() {
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
};

Game.prototype.moveAll = function() {
};
