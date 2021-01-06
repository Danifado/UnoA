whatsIcon = document.getElementsByClassName("whatsIcon")[0];
whatsTr = document.getElementsByClassName("whatsTr")[0];
whatsText = document.getElementsByClassName("whatsText")[0];

function whatsOn(){
    document.getElementsByClassName("letters")[0].style.color = 'white'
    whatsIcon.src = './Assets/SVG/whatsGreenIcon.svg';
    whatsTr.style.width = '20vw';
    whatsTr.style.backgroundColor ='#25D366';
    console.log("sisisi");
    setTimeout(() => {
        setTimeout(()=>{
            document.getElementsByClassName("letters")[0].style.visibility = 'visible'
        }, 80);
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
    console.log("ñoñoñoño");
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
