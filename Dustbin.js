class Dustbin {
    constructor(x,y,width,height){
        var dustbin_options={
        isStatic:true
        }
    this.body=bodies.rectangle(x,y,width,height,dustbin_options);
    this.image=loadImge("dustbingreen.png");
    World.add(world,this.body);
}
display(){
    var pos = this.body.position
    imageMode(CENTER);
    image(this.image,pos.x.pos.y,this.width,this.height);
}
}
    