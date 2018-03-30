function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");

  this.background = new Background(this);
  this.player = new Player(this);

  this.fps = 60;
  this.frameInterval = 0;

  this.obstacleArray = [];

  this.reset();
}

Game.prototype.start = function() {
  setInterval(function(){
    this.clear();
    this.moveAll();
    this.draw();
    this.frameInterval++;

    if(this.frameInterval == 1000){
      this.frameInterval = 0;
    }

    if(this.frameInterval % 45 == 0) {
      this.generateObstacle();
    }

  }.bind(this), 1000/this.fps);
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
  this.obstacleArray.push(new Obstacle(this));
  };

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function(){
 this.background.draw();
 this.player.draw();
 var d = 10;
 for(var i = 0;i< this.obstacleArray.length; i++){
  this.obstacleArray[i].x -= d; 
  this.obstacleArray[i].draw();
 }
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
//  this.obstacle.move();
};
