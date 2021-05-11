fetch("/head-foot/header.html")
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

fetch("./head-foot/nav-bar.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("nav").innerHTML = data;
});

function openNav(){
  document.querySelector("#side-nav-bar").style.width = "80%";
  document.querySelector(".opacity-content").style.visibility = "visible";
  document.querySelector(".opacity-content").style.opacity = "100";
  
}

function closeNav(){
  document.querySelector("#side-nav-bar").style.width = "0%";
  document.querySelector(".opacity-content").style.visibility = "hidden";
  document.querySelector(".opacity-content").style.opacity = "0";
}