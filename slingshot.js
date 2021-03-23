class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB=pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

fly(){
    this.slingshot.pointB=null;
}
    display(){
        if(this.slingshot.pointB){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    attach(body){

     this.slingshot.bodyA=body;
     this.slingshot.pointB=this.pointB;

    }
}