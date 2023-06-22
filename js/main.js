var button = document.getElementById("btn");

var model = document.getElementById("model");

var colorChange = document.getElementById("color");

var btn1 = document.getElementById("btn1");

var cancel = document.getElementById("icon");

var para = document.getElementById("para");

button.addEventListener("click", function () {
    model.style.display = "block";
    colorChange.style.display = "block";
})

btn1.addEventListener("click", function () {
    para.style.display = "block";
})



cancel.addEventListener("click", function () {
    model.style.display = "none";
    para.style.display = "none";
    colorChange.style.display = "none";
})
