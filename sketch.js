
const{Engine,
      World,
      Bodies,
      Mouse,
      MouseConstraint,
      Constraint
     } = Matter;



let ground;
const boxes=[];
let bird;
let world, engine;
let mConstraint;
let slingshot;


let ballImg;
let boxImg;

function preload(){
  ballImg = loadImage('ball.png');
  boxImg= loadImage('box.png');
  coverImg=loadImage('cover.png');
}
var w = window.innerWidth;
var h = window.innerHeight; 
function setup() {
  const canvas  = createCanvas(w,h);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-30,width,30);
  for(let i =0;i<6;i++){
     boxes[i] = new Box(height+300,100 - i * 60,90,90);
  }
  bird = new Bird(350,300,30);
  
  slingshot= new SlingShot(350,300,bird.body);
  
  const mouse= Mouse.create(canvas.etl);
  const options = {
    mouse: mouse
  };
  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);
}
function keyPressed(){
 if(key == 'r'){
   World.remove(world,bird.body);
   bird = new Bird(350,300,30);
   slingshot.attach(bird.body);
 }
  
}

function mouseReleased(){
  setTimeout(()=> {
    slingshot.fly();
  },100);
}

function draw() {
  background(coverImg);
  Engine.update(engine);
  ground.show();
  for(let box  of boxes){
    box.show();
  }
  slingshot.show();
  bird.show();

  
}