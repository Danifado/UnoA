fetch("./head-foot/header.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("header").innerHTML = data;
});

fetch("./head-foot/footer.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("footer").innerHTML = data;
});

setTimeout(5000);

function changeBotRight(mediaSmall){
  // console.log(botRightImg.src);
  // console.log("holis")

}

var mediaSmall =  window.matchMedia("(max-width: 768px)");


changeBotRight(mediaSmall);
setInterval(changeBotRight(), 1000);