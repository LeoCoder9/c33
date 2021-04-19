class sling{
    constructor(bodyA,pointB){ //bird object, log object
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:20
        }
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.rope = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.rope)
      
    }
    display(){
       
        image(this.sling1, 200, 20)
        image(this.sling2, 170, 20)
        stroke(74,34,13)
        strokeWeight(5)
        if(this.rope.bodyA){
            push()
            if(this.rope.bodyA.position.x < 220){
                line(this.rope.bodyA.position.x-20,this.rope.bodyA.position.y,this.pointB.x-10,this.pointB.y)
            line(this.rope.bodyA.position.x-20,this.rope.bodyA.position.y,this.pointB.x+30,this.pointB.y-7)
            image(this.sling3,this.rope.bodyA.position.x-30, this.rope.bodyA.position.y-10, 15, 30 )
            }
            else{
                line(this.rope.bodyA.position.x+25,this.rope.bodyA.position.y,this.pointB.x-10,this.pointB.y)
                line(this.rope.bodyA.position.x+25,this.rope.bodyA.position.y,this.pointB.x+30,this.pointB.y-7)
                image(this.sling3,this.rope.bodyA.position.x+25, this.rope.bodyA.position.y-10, 15, 30 )
            }
        
            pop()
        }
    
    }
 fly(){
     this.rope.bodyA = null
 }
 reset(body){
  this.rope.bodyA = body
 }
}