class Tree
{
    constructor(x,y,width,height)
    {
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 430,430);
        pop(); 
    }
}