// Write your code here
let lightBulb1 = document.querySelector("#lightbulb1");
let lightBulb2 = document.querySelector("#lightbulb2");
let lightBulb3 = document.querySelector("#lightbulb3");
let subtitle = document.querySelector(".subtitle");
let count = 0;

lightBulb1.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lightbulb ${count} times`
    this.classList.toggle("active");
});

lightBulb2.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lightbulb ${count} times`
    this.classList.toggle("active");
});

lightBulb3.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lightbulb ${count} times`
    this.classList.toggle("active");
});