var database;
var backgroundImage, canvas;
var form, player, game;
var gameState = 0;


function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
    
}

