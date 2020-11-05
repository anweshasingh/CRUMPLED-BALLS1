class Dustbin {
  constructor(x, y) {
    var options = {
        isStatic: true
    }
    this.angle = 0;
    this.left = Bodies.rectangle(x-100, y-50,100, 20, options);
    this.right = Bodies.rectangle(x+100, y-50, 100,20, options);
    this.bottom = Bodies.rectangle(x, y, 200, 20, options);
    
    Matter.Body.setAngle(this.left,this.angle);
    Matter.Body.setAngle(this.right,this.angle);
    
    World.add(world, this.bottom);
    World.add(world, this.left);
    World.add(world, this.right);
  }
  display(){
    var pos1 =this.bottom.position;
    var pos2 =this.left.position;
    var pos3 =this.right.position;
   
    push();
    translate(pos2.x, pos2.y);
    rotate(this.angle);
    rectMode(CENTER);
    fill("white");
    stroke("orange");
    rect(0, 0, 20, 100);
    pop();

    push();
    translate(pos3.x, pos3.y);
    rotate(-1* this.angle);
    rectMode(CENTER);
    fill("white");
    stroke("orange");
    rect(0, 0, 20,100);
    pop();

    push();
    translate(pos1.x, pos1.y);
    rectMode(CENTER);
    fill("white");
    stroke("orange");
    rect(0, 0, 200,20);
    pop();
  }
}
