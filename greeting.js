const greetings = ["Hei Hei!", "Bonjour!", "Hola!", "Yo!", "Sup!", "Ni hao！", "Annyeong!", "Salam!", "Konnichiwa!", "Dia dhuit!", "Selamat siang!"]
const titles = ["photographer", "designer", "programmer", "traveler", "veteran", "immigrant"]
const actions = ["draw", "3d model", "program", "take pictures of"]

const lenGreetings = greetings.length;
const lenTitles = titles.length;

function getRandomGreeting(len){
return Math.floor(Math.random() * len);
}

document.getElementById("demo").style.backgroundColor = "gray"; //setting background color of typewriter object

document.getElementById("greeting").innerHTML = greetings[getRandomGreeting(lenGreetings)];
document.getElementById("skillz").innerHTML = titles[getRandomGreeting(lenTitles)];

let i = 0;
const txt = titles[getRandomGreeting(lenTitles)];
const speed = 60;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

setTimeout(typeWriter, 3000); //waits 3 seconds then runs typewriter
