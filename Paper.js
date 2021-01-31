class paper{
    constructor(x,y,radius){
    var paper_options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2,
    }
    this.body=Bodies.circle(x,y,20,paper_options);
    this.radius=5;
    this.image= loadImage("paper.png");
    World.add(world,this.body);

}
display(){
    push();
    var pos=this.body.position;
    ellipseMode(RADIUS);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,50,50);
    //circle(pos.x,pos.y,this.radius);
    pop();
}
}