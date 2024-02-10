const colors = ["green", "red", "blue", "yellow", "purple", "orange", "pink", "brown", "black", "white", "gray", "cyan", "magenta", "lime", "indigo", "violet", "teal", "navy", "olive", "maroon"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // cria um numero aleatório de 0 a 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
