var canvas;
var music;
var box1,box2,box3,box4;
var musicbox;
var line1,line2,line3,line4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(100,550,150,30);
    box1.shapeColor = "red";

    box2 = createSprite(300,550,150,30);
    box2.shapeColor = "lightgreen";

    box3 = createSprite(500,550,150,30);
    box3.shapeColor = "skyblue";

    box4 = createSprite(700,550,150,30);
    box4.shapeColor = "pink";

    musicbox = createSprite(300,100,50,50);
    musicbox.velocityX = 0;
    musicbox.velocityY = 5;

}

function draw() {
    background("black");

    musicbox.bounceOff(edges);

    if(musicbox.isTouching(box1) && musicbox.bounceOff(box1)){
        musicbox.shapeColor = "red";
        music.play();
    }

    if(musicbox.isTouching(box2) && musicbox.bounceOff(box2)){
        musicbox.shapeColor = "lightgreen";
        music.play();
    }

    if(musicbox.isTouching(box3) && musicbox.bounceOff(box3)){
        musicbox.shapeColor = "skyblue";
        music.play();
    }

    if(musicbox.isTouching(box4) && musicbox.bounceOff(box4)){
        musicbox.shapeColor = "pink";
        music.play();
    }

    drawSprites();
}
