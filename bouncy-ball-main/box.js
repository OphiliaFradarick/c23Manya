class Box{
    constructor(x, y, width, height){

        var options = {
            "restitution": 1,
            "friction":0.04,
            "density":1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h = height;
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push(); //it will start a change 

        translate (pos.x, pos.y); // it will make the body translate with respect to the orgin 

        rotate(angle); //it will make the object rotate with repect to the body's own axis
        
        rectMode(CENTER);
        rect(0,0, this.w, this.h);

        pop(); //It will stop a change and revert back to push 

    }


}