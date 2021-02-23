class Box{
    constructor(x,y,width,height){
        var Options={
            'restitution':1.0,
            'friction':0.3,
            'density':1.0
          }
          this.body=Bodies.rectangle(x,y,width,height,Options);
          this.width=width;
          this.height=height;
          World.add(world,this.body);
    }
    display(){
       push();
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       fill(255);
        rectMode(CENTER);
  rect(0,0,this.width,this.height);
    pop ();
    }
}