function changeBotRight(mediaSmall){
  var botRightImg = document.getElementsByClassName("botRight")[0];
  console.log(botRightImg.src);
  if (mediaSmall["matches"]){
    botRightImg.src = "./assets/otros/botrightborder.svg";
    console.log("Cagaste waschin");
  } else {
    botRightImg.src = "./assets/otros/botrightborderpc.svg";
    console.log("SIUUUU!!!!!");

  }
}

var mediaSmall =  window.matchMedia("(max-width: 768px)");


changeBotRight(mediaSmall);
mediaSmall.addListener(changeBotRight);