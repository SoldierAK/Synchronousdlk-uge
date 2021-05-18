class Game{
 constructor(){}
 getState(){
     var gameStateRef = database.ref("gameState");
     gameStateRef.on("value", function (){
      gameState = data.val();
     })
 }
 update(state){
     database.ref("/").update({
         gameState : state 
     })
 }
 start(){
     if(gameState === 0){
         form = new Form();
         form.display();
     }
 }
}