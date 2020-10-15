class Paper {
    constructor(x,y){
        var options= {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 60;// the same problem as in newton's cradle

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill('violet');
        ellipse(pos.x,pos.y,this.radius,this.radius);// refer to the newton cradle
        //same as newton's cradle problem

    }
}