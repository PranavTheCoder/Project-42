class Minutes {
    constructor() {
        var options = {
            isStatic : false
        }

        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);  
        fill("red");
        line(0,0,300,200);
        pop();
    }
}