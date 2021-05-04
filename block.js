class Block  {
    constructor(x,y,width,height)  {
        var options={
            restitution:0.4,
            friction:1,
            //isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.x = x;
        this.y = y;
        this.visiblity =255;
        
        

        World.add(world,this.body)

    }
    display()  {
        var pos = this.body.position;
        var angle = this.body.angle;
        if (this.body.speed<7) {
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0, this.width, this.height)
            pop ();
        } else {
            push ();
                World.remove(world,this.body);
                this.visiblity = this.visiblity-5
                tint(255,this.visiblity)
                rect(999,999,this.width,this.height);
            pop();
        }
    }

      score(){
          if(this.visiblity<0 && this.visiblity >-105){
              score++
          }
      }





}