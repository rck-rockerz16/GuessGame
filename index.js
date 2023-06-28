var randomImgNum = Math.floor(Math.random() * 2);

var numOfImag = document.querySelectorAll(".container img").length;
for (var i = 0; i < numOfImag; i++) {
    document.querySelectorAll(".container img")[i].addEventListener("click", function () {
        reveal(this.getAttribute("alt"));
    });
}
function reveal(imgNum) {
    document.querySelectorAll("img")[randomImgNum].setAttribute("src", "./images/gold-coin.png");
    if (imgNum == randomImgNum)
        document.querySelector("h1").innerHTML = "You Won<a href='./index.html' target='_self'>🔄️</a>";
    else
        document.querySelector("h1").innerHTML = "Try Again<a href='./index.html' target='_self'>🔄️</a>";


}