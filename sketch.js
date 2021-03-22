var wall1 = createSprite(150, 100, 300, 10);
wall1.shapeColor = 'olive';
var wall2 = createSprite(250, 200, 300, 10);
wall2.shapeColor = 'olive';
var wall3 = createSprite(150, 300, 300, 10);
wall3.shapeColor = 'olive'; 

var player = createSprite(50, 350, 20, 20);
player.shapeColor = 'maroon';

var cup = createSprite(50, 50, 20, 20);
cup.shapeColor = 'coral';

var deaths = 0;

var ball1 = createSprite(200, 350, 15, 15);
ball1.shapeColor = 'plum';
ball1.velocityX = 15;
var ball2 = createSprite(200, 350, 15, 15);
ball2.shapeColor = 'plum';
ball2.velocityY = -10;
var ball3 = createSprite(100, 350, 15, 15);
ball3.shapeColor = 'plum';
ball3.velocityY = -10;

var miniBall1 = createSprite(125, 50, 10, 10);
miniBall1.shapeColor = 'aqua';
miniBall1.velocityY = -8;
var miniBall2 = createSprite(175, 50, 10, 10);
miniBall2.shapeColor = 'turquoise';
miniBall2.velocityY = 8;
var miniBall3 = createSprite(225, 50, 10, 10);
miniBall3.shapeColor = 'aqua';
miniBall3.velocityY = -8;
var miniBall4 = createSprite(275, 50, 10, 10);
miniBall4.shapeColor = 'turquoise';
miniBall4.velocityY = 8;

var randomBall = createSprite(200, 250, 20, 20);
randomBall.shapeColor = 'tan';
randomBall.velocityX = 3;
randomBall.velocityY = 2;

var randomBall2 = createSprite(200, 250, 20, 20);
randomBall2.shapeColor = 'tan';
randomBall2.velocityX = 3;
randomBall2.velocityY = -2;

var randomBall3 = createSprite(200, 250, 20, 20);
randomBall3.shapeColor = 'tan';
randomBall3.velocityX = -3;
randomBall3.velocityY = 2;

var randomBall4 = createSprite(200, 250, 20, 20);
randomBall4.shapeColor = 'tan';
randomBall4.velocityX = -3;
randomBall4.velocityY = -2;

var gateBall = createSprite(200, 150, 20, 20);
gateBall.shapeColor = 'violet';
gateBall.velocityX = 20;
gateBall.velocityY = 1;

invisibleWall = createSprite(50, 100, 100, 10);
invisibleWall.visible = false;

invisibleWall2 = createSprite(50, 200, 100, 10);
invisibleWall2.visible = false;

invisibleWall3 = createSprite(350, 300, 100, 10);
invisibleWall3.visible = false;

function draw(){
 background('navy');
 stroke('white');
 fill('white');
 textSize(20);
 text("Deaths: " + deaths, 300, 380);
 
 if(keyDown(UP_ARROW)){
  player.y = player.y - 5;
 }
 if(keyDown(DOWN_ARROW)){
  player.y = player.y + 5;
 }
 if(keyDown(LEFT_ARROW)){
  player.x = player.x - 5;
 }
 if(keyDown(RIGHT_ARROW)){
  player.x = player.x + 5;
 }
 
 createEdgeSprites();
 player.bounceOff(edges);
 player.bounceOff(wall1);
 player.bounceOff(wall2);
 player.bounceOff(wall3);
 ball1.bounceOff(edges);
 ball2.bounceOff(edges);
 ball2.bounceOff(wall3);
 ball3.bounceOff(edges);
 ball3.bounceOff(wall3);
  miniBall1.bounceOff(edges);
  miniBall1.bounceOff(wall1);
  miniBall2.bounceOff(edges);
  miniBall2.bounceOff(wall1);
  miniBall3.bounceOff(edges);
  miniBall3.bounceOff(wall1);
  miniBall4.bounceOff(edges);
  miniBall4.bounceOff(wall1);
  randomBall.bounceOff(edges);
  randomBall.bounceOff(invisibleWall2);
  randomBall.bounceOff(invisibleWall3);
  randomBall.bounceOff(wall3);
  randomBall.bounceOff(wall2);
  randomBall2.bounceOff(edges);
  randomBall2.bounceOff(invisibleWall2);
  randomBall2.bounceOff(invisibleWall3);
  randomBall2.bounceOff(wall3);
  randomBall2.bounceOff(wall2);
  randomBall3.bounceOff(edges);
  randomBall3.bounceOff(invisibleWall2);
  randomBall3.bounceOff(invisibleWall3);
  randomBall3.bounceOff(wall3);
  randomBall3.bounceOff(wall2);
  randomBall4.bounceOff(edges);
  randomBall4.bounceOff(invisibleWall2);
  randomBall4.bounceOff(invisibleWall3);
  randomBall4.bounceOff(wall3);
  randomBall4.bounceOff(wall2);
  gateBall.bounceOff(edges);
  gateBall.bounceOff(invisibleWall);
  gateBall.bounceOff(invisibleWall2);
  gateBall.bounceOff(wall1);
  gateBall.bounceOff(wall2);
 
 drawSprites(); 
 youWin();
 lose();
}

function youWin(){
  if(player.isTouching(cup)){
    textFont('Times New Roman');
    stroke('White');
    fill('white');
    textSize(80);
    text('You Win!', 50, 225);
  }
}

function lose(){
  if(ball1.isTouching(player) || ball2.isTouching(player) || ball3.isTouching(player) || miniBall1.isTouching(player) || miniBall2.isTouching(player) || miniBall3.isTouching(player) || miniBall4.isTouching(player) || randomBall.isTouching(player) || randomBall2.isTouching(player) || randomBall3.isTouching(player) || randomBall4.isTouching(player) || gateBall.isTouching(player)) {
    playSound("sound://category_pop/bamboo_pop_v2_notification4.mp3");
    player.x = 50;
    player.y = 350;
    deaths = deaths + 1;
  }
}
