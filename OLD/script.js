whatsIcon = document.getElementsByClassName("whatsIcon")[0];
whatsTr = document.getElementsByClassName("whatsTr")[0];
whatsText = document.getElementsByClassName("whatsText")[0];

function whatsOn(){
    document.getElementsByClassName("letters")[0].style.color = 'white'
    whatsIcon.src = './Assets/SVG/whatsGreenIcon.svg';
    whatsTr.style.width = '285px';
    whatsTr.style.backgroundColor ='#25D366';
    setTimeout(() => {
        setTimeout(()=>{
            document.getElementsByClassName("letters")[0].style.visibility = 'visible'
        }, 20);
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.whatsText .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: false })
            .add({
                targets: '.whatsText .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i + 1)
            })
    }, 300);
}

function whatsOff(){
    whatsIcon.src = './Assets/SVG/whatsGrayIcon.svg';
    document.getElementsByClassName("letters")[0].style.color = 'gray'
    document.getElementsByClassName("letters")[0].style.visibility = 'hidden'
    whatsTr.style.width = '5vh';
    whatsTr.style.backgroundColor = 'gray';
    // setTimeout(() => {
    //     document.getElementsByClassName("letters")[0].style.visibility = 'hidden'
    // }, 500);
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.whatsText .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

function myFunction(x) {
    x.classList.toggle("change");
}

// Slide Show

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}



function myFunction2() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}