class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.smoke =[]
    //console.log(this.smoke)
  }

  display() {
    console.log(this.body.speed)
    super.display();
    if(this.body.position.x>200&&this.body.velocity.x>0.2){
    var pos = [this.body.position.x, this.body.position.y]
    this.smoke.push(pos)
    }
    for(var i = 0; i<this.smoke.length; i++){
      image(this.image1, this.smoke[i][0], this.smoke[i][1])
    }
  }
}
