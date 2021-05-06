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