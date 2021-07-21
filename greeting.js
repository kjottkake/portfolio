const greetings = ["Hei Hei!", "Bonjour!", "Hola!", "Yo!", "Sup!", "Ni hao！", "Annyeong!", "Salam!", "Konnichiwa!", "Dia dhuit!", "Selamat siang!"]
const titles = ["photographer", "designer", "programmer", "traveler", "veteran", "immigrant"]
const actions = ["draw", "3d model", "program", "take pictures of"]

const lenGreetings = greetings.length;
const lenTitles = titles.length;

//function to return randomgreeting array int
function getRandomGreeting(len){
return Math.floor(Math.random() * len);
}

document.getElementById("demo").style.backgroundColor = "gray"; //setting background color of typewriter object


//setting random greeting or skill innerhtmls
document.getElementById("greeting").innerHTML = greetings[getRandomGreeting(lenGreetings)];
document.getElementById("skillz").innerHTML = titles[getRandomGreeting(lenTitles)];


//typewriter function
let i = 0;
const txt = titles[getRandomGreeting(lenTitles)]; //sets random text array for output
const speed = 60;


function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      console.log("i: ", i);
    }
    backspace();
  }



setTimeout(typeWriter, 0);
// setTimeout(typeWriter, 3000); //waits 3 seconds then runs typewriter
