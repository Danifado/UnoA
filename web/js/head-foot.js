const headerMediaQuery = window.matchMedia("(max-width: 768px)");

function headerImportHandler(e) {
  if (e.matches) {
    $('header')[0].style.display = "None";
    $('header-mobile')[0].style.display = "Grid"
  } else {
    $('header')[0].style.display = "Block";
    $('header-mobile')[0].style.display = "None"
  }
}

fetch("/head-foot/header.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("header").innerHTML = data;
});

fetch("/head-foot/header-mobile.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("header-mobile").innerHTML = data;
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

 
// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0]; 

// Create new link Element
var link = document.createElement('link');

// set the attributes for link element 
link.rel = 'stylesheet'; 

link.type = 'text/css';

link.href = '/css/head-foot.css'; 

// Append link element to HTML head
head.appendChild(link); 

headerMediaQuery.addListener(headerImportHandler);

headerImportHandler(headerMediaQuery);