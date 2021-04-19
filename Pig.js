class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.vis = 255;
  }
    display(){
     // console.log(this.vis)
      if(this.body.speed<3.5){
        
      super.display()
      }
      else{
        
      
    World.remove(world, this.body)
    push()
    this.vis = this.vis-5
    tint(255, this.vis) 
   image(this.image, this.body.position.x,this.body.position.y, 50,50)
   pop()
      }
}
score(){
  if(this.vis <0 && this.vis >-1000 ){
    score = score+1
  }
}
}
