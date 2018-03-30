function Player(game) {
  this.game = game;

  this.img = new Image();
  this.img.src = 'img/player.png';

  this.x = 0.1 * this.game.canvas.width;
  this.y = 0.8 * this.game.canvas.height;
  this.yMax = this.y - 200;
  this.vy = 0;
  this.up = true; //Direction of jump.
  this.jump = false;
  this.width = 50;
  this.height = 80;
  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.setListeners();

}
//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width/this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.width,
    this.height);

    this.animateImg();
};

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch( event.keyCode) {
      case 38:
        this.vy = 10;
        this.move();
        break;
    }
  }.bind(this);
};

Player.prototype.shoot = function() {
};

Player.prototype.animateImg = function() {
if(this.game.frameInterval % 6 == 0){

  if(this.img.frameIndex<2){
    this.img.frameIndex++;
  }else{
    this.img.frameIndex=0;
  }
}
};

Player.prototype.move = function() { 

  
  if(this.y > this.yMax && this.up == true){
    this.y -= this.vy;
  }
  else if (this.y == this.yMax || (this.y > this.yMax && this.up == false) ){
    this.up = false;
    this.y += this.vy;
    if(this.y > 0.8 * this.game.canvas.height){
      this.up = true;
      this.vy = 0;
    }

  }
};
