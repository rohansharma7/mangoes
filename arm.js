class Arm
{
    constructor(body, anchor){
        var options = 
        {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.04,
            length: 1
        }
        this.bodyA = body;
        this.pointB = anchor;
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }

    fly()
    {
        this.elastic.bodyA = null;
    }

    attach(body)
    {
        this.elastic.bodyA = body;
    }

    display()
    {
        if(this.elastic.bodyA)
        {
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}