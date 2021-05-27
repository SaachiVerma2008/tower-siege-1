class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        polygon = bodies.circle(50,200,20)
        polygon = polygon.create(options);

        World.add(world, polygon);
    }
    attach(body){
        this.polygon.bodyA = body;
    }
    
    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        image(this.polygon,170,20);
        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.polygon,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.polygon,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}