class Ground extends  Box{
  constructor(x,y,w,h){
    super(x,y,w,h);
    this.body.isStatic=true;
  }
    show(){
    const pos=this.body.position;
    const angle=this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    stroke(' rgb(255,205,50)');
    fill('rgb(255,205,50)')
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }
}