class Block {
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.04
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 220;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      //tint is only for image
      //tint(255, this.visibility);
      pop();
    
    }
  }
  score(){
    if (this.visibility < 0 && this.visibility >- 105){
      score++;
    }
  }
}
