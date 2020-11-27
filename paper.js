class paper{
    constructor(x,y,radius){
        var op={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius/2,op);
        this.radius= radius;
        World.add(world,this.body);
    }

    display(){
        push(); 
        fill("pink"); 
        translate(this.body.position.x, this.body.position.y ); 
        rotate(this.body.angle);
        ellipse(0,0, this.radius, this.radius); 
        pop();
    }
}
