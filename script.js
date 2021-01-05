whatsIcon = document.getElementsByClassName("whatsIcon")[0];
whatsTr = document.getElementsByClassName("whatsTr")[0];
whatsText = document.getElementsByClassName("whatsText")[0];

function whatsOn(){
    whatsIcon.src = './Assets/SVG/whatsGreenIcon.svg';
    whatsTr.style.width = '30vh';
    whatsTr.style.backgroundColor ='#25D366';
    console.log("sisisi");
    setTimeout(()=>{
        setTimeout(() => {
            whatsText.style.visibility = 'visible'
        }, 200);
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
    }, 200);
}

function whatsOff(){
    whatsIcon.src = './Assets/SVG/whatsGrayIcon.svg';
    console.log("ñoñoñoño");
    whatsTr.style.width = '5vh';
    whatsTr.style.backgroundColor = 'gray';
    // setTimeout(() => {
        whatsText.style.visibility = 'hidden'
    // }, 200);
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.whatsText .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");