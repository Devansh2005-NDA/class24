class Ground{
    constructor(x,y,width,height){
        var Option={
            isStatic:true 
          }
         this.Body=Bodies.rectangle(x,y,width,height,Option);
         this.width=width;
         this.height=height;
         World.add(world,this.Body); 
    }
    display(){
        rectMode(CENTER); 
        rect(this.Body.position.x,this.Body.position.y,this.width,this.height);
    }
}