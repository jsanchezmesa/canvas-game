function Obstacle(game) {
  var random = Math.floor(Math.random() * 500);
  this.game = game;
  this.x = this.game.canvas.width + random;
  this.y = 0.8 * this.game.canvas.height;
  this.img = new Image();
  this.img.src = "https://vignette.wikia.nocookie.net/zt2downloadlibrary/images/d/dc/Low_Ornate_Chinese_Fence_%28Otter_Lord%29.png/revision/latest?cb=20150815204328";


}

Obstacle.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x-100, this.y, 100, 100);

};

Obstacle.prototype.move = function() {
  var d = 5;

  this.x -= d;

  if(this.x < -this.game.canvas.width) {
    this.x = 0;
  } 
};