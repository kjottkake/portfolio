const greetings = ["Hei Hei!", "Bonjour!", "Hola!", "Yo!", "Sup!", "你好！"]

// const displayedGreeting = document.querySelector("#greeting");

// console.log(displayedGreeting);

function getRandomGreeting(){
return Math.floor(Math.random() * greetings.length);
}


document.getElementById("greeting").innerHTML = greetings[getRandomGreeting()];