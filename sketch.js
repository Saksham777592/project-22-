const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var helicopter, helicopterImg;
var package, packageImg;

function preload() {
    packageImg = loadImage("package.png");
    helicopterImg = loadImage("helicopter.png");
}

function setup() {
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    package = createSprite(width/2, 80, 10, 10);
    package.addImage(packageImg);
    package.scale = 0.3;

    helicopter = createSprite(width/2, 80, 10, 10);
    helicopter.addImage(helicopterImg);

    ground = createSprite(width/2, height-50, width, 20);
    ground.shapeColor = "green";

    packageBody = Bodies.rectangle(width/2, 80, 10, 10, { resitution: 0.5, isStatic: true });
    World.add(world, packageBody);

    groundBody = Bodies.rectangle(width/2, height-50, width, 20,  { isStatic: true });
    World.add(world, groundBody);
}

function draw() {
    background(0);
    Engine.update(engine);

    package.x = packageBody.position.x;
    package.y = packageBody.position.y;

    drawSprites();

}

function keyPressed() {
    if(keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(packageBody, false)
    }
}