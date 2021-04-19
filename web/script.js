var botRightImg = document.getElementsByClassName("botRight")[0];
console.log(botRightImg.src);

function changeBotRight(mediaSmall){
  if (mediaSmall["matches"]){
    botRightImg.src = "./assets/otros/botrightborder.svg";
  } else {
    botRightImg.src = "./assets/otros/botrightborderpc.svg";
  }
}

var mediaSmall =  window.matchMedia("(max-width: 768px)");


changeBotRight(mediaSmall);
mediaSmall.addListener(changeBotRight);