var form,game,player;
var bg1
var bg2
var playerCount,database
var gameState
var allPlayers
var rocket1,rocket2,rocket1_img,rocket2_img
var rockets = []

function preload(){
    bg1 = loadImage("/Images/bg1.jfif")
    bg2 = loadImage("/Images/background.jpg")
    rocket1_img = loadImage("/Images/Red_rocket.png")
    rocket2_img = loadImage("/Images/Blue_rocket.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
database = firebase.database();
game= new Game();
game.getState()
game.start()


}

function draw(){
    background(bg1)

    if (playerCount === 2) {
        game.update(1);
      }
console.log(gameState)
      if(gameState == 1){
          game.play()
      }
    

}
