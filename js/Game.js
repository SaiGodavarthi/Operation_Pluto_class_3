class Game{
    constructor(){
this.resetButton = createButton("reset")
this.playerMoving = false
    }

    start(){
    form = new Form()
    form.display()
    player = new Player();
    playerCount = player.getCount();

rocket1 = createSprite(width/2-200,height-100)
rocket1.addImage(rocket1_img)
rocket1.scale = 0.4

rocket2 = createSprite(width/2+200,height-100)
rocket2.addImage(rocket2_img)
rocket2.scale = 0.4

rockets = [rocket1,rocket2]
    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

      play(){
        this.handleElements()
        this.handleResetButton()
        Player.getPlayerinfo()
         if(allPlayers !== undefined){
           image(bg2,0,-height*5,width,height*6)
           
         }
         this.handlePlayerControls()
         drawSprites();
      }

      handleResetButton() {
        this.resetButton.mousePressed(() => {
          database.ref("/").set({
            playerCount: 0,
            gameState: 0,
            players: {},
          });
          window.location.reload();
        });
      }

      handleElements(){
        form.hide()
        this.resetButton.position(windowWidth/2,windowHeight/2)
      }


      handlePlayerControls() {
        
        if (keyIsDown(UP_ARROW)) {
          this.playerMoving = true;
          player.positionY += 10;
          player.update();
        }
    
        if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
          this.leftKeyActive = true;
          player.positionX -= 5;
          player.update();
        }
    
        if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
          this.leftKeyActive = false;
          player.positionX += 5;
          player.update();
        }
      
    }

}