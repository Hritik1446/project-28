  
class shot{
    constructor(bodyA,pointB){
    var options={
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.04,
        length : 10
    }
   this.sling=Matter.Constraint.create(options)
   this.pointB=pointB;
  
   World.add(world,this.sling)
    }
   
    flying(){
        this.sling.bodyA=null;
    }
    
    attach(body){
        this.sling.bodyA=body
    }
   display(){
   push();
   strokeWeight(5)
   stroke(48,22,8)
   if(this.sling.bodyA){
      
   line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
      
   pop();
   }
   }
}