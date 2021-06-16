const pcMediaQuery = window.matchMedia("(max-width: 768px)");

function flipbookImportHandler(e) {
if (e.matches) {
    $('flipbook')[0].style.display = "None";
    $('flipbook-mobile')[0].style.display = "Block"
} else {
    $('flipbook')[0].style.display = "Block";
    $('flipbook-mobile')[0].style.display = "None"
}
}

fetch("/flipbook/flipbook.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("flipbook").innerHTML = data;
});

fetch("/flipbook/flipbook-mobile.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("flipbook-mobile").innerHTML = data;
});

pcMediaQuery.addListener(flipbookImportHandler);

flipbookImportHandler(pcMediaQuery);


$(window).bind('keydown', function(e){
    if (e.keyCode==37)
    $('flipbook .flipbook').turn('previous');
    else if (e.keyCode==39)
    $('flipbook .flipbook').turn('next');
});