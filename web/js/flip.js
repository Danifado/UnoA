fetch("/flipbook/flipbook.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("flipbook").innerHTML = data;
});