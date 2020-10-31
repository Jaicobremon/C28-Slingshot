class SlingShot{
    //setting constructor
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //creating this.sling and this.pointB
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        //Adding to world
        World.add(world, this.sling);
    }
    //creating function fly
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        //giving value to pointA and pointB
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        //creating line between points
        line(pointA.x, pointA.y, pointB);
        }
    }
    
}