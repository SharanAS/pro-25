class side{
    constructor(x,y,width,height){
        var side_options={
        isStatic: true,
        friction : 0.3,
        density : 1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,side_options);
        this.width=width;
        this.height=height; 

        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        var pos = this.body.position;
        translate(pos.x,pos.y);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}