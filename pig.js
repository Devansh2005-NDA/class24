class Pig{
    constructor(x,y){
        var Options={
            'restitution':1.0,
            'friction':0.3,
            'density':1.0
          }
          this.body=Bodies.rectangle(x,y,50,50,Options);
          this.width=50;
          this.height=50;
          World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       fill("green");
        rectMode(CENTER);
  rect(0,0,this.width,this.height);
    pop ();
    }
}