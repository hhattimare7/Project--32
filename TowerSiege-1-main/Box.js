class Box {
  constructor(x, y){
    //super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, 20, 40, options);
  this.width = 20;
  this.height = 40;
  this.visiblity = 255;
  World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;

    if(this.body.speed<5){
     push();
      rectMode(CENTER);
      fill("cyan");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
     // super.display();
    }else{
      World.remove(world,this.body);
      push();
      this.visiblity = this.visiblity - 25;
      tint(255,this.visiblity);
      rect(this.image,pos.x, pos.y, 20, 40);
      pop();
    }
    console.log(this.visiblity);

  }

  score(){
    if(this.visiblity<0 && this.visiblity>-2000){
      score++;
    }
  }

};
