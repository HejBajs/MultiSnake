var input;
//max username length
const maxUsernameLength = 10;
//terms that usernames cant include
const bannedUsernameTerms = []
//default name for users if they dont write a username
const defaultName = "User"
//ypos for the username input box
const inputY=2
//delay for joining the lobby
const joinDelay = 70;
//var for the playButton
let playButton;
let playButtonX;
let playButtonY;
let playButtonSize;
//all the menu textures get names here:
let playButtonDownSprite;
let playButtonUpSprite;
let logoLandScapeSheet;
//sprite sheets
let logoLandScape;
//all the menu sounds here:
var playButtonDownSound = new Howl({
      src: ['./assets/sounds/buttonDown.mp3']
});
var playButtonUpSound = new Howl({
      src: ['./assets/sounds/buttonUp.mp3']
});

//function for drawing the menu
function drawMenu(){
  //checks if there is a player and if the player has joined a lobby
  if(!frontEndPlayers[socket.id]){return;}
  if(frontEndPlayers[socket.id].joined == true){
    input.hide()
    return;
  }else {
    input.show()
  }

  //draws the play button
  push();
  imageMode(CENTER);
  image(playButton, playButtonX, playButtonY, playButtonSize, playButtonSize);
  pop();
  //draws the logo
  logoLandScape.draw();
}

//function for joining the lobby with a username
function joinLobby(){
  setTimeout(() => {
    username = "";
    if(input.value().length > 1){
      if(input.value().length > maxUsernameLength){
        for(i = 0; i < maxUsernameLength; i++){
          username+= input.value()[i];
        }
      } else {
        username = input.value();
      }
    } else{
      username = defaultName;
    }

    for(i = 0; i < bannedUsernameTerms.length; i++){
      if(username.toLowerCase().includes(bannedUsernameTerms[i].toLowerCase())){
        username = defaultName;
      }
    }

    socket.emit("joined", {lobby: 0, username: username});
  }, joinDelay);
}
