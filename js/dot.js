// var i = 0;
// var txt = 'contoh texs'*/
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById(typeWriter).innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();
// var i=0,text;
// text = "I'AM MUCHAMAD CHOIRUL ULUM..";

// function ketik() {
//   if(i<text.length){
//     document.getElementById("text").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(ketik,100);
//   }
// }
// ketik();
// animasi ketikan teks
const textAnimation = document.getElementById("text");
const textToType = "I'AM MUCHAMAD CHOIRUL ULUM..";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        textAnimation.textContent += textToType[index];
        index++;
        setTimeout(typeText, 70); 
    } else {
        setTimeout(eraseText, 100); 
    }
}

function eraseText() {
    if (textAnimation.textContent.length > 0) {
        textAnimation.textContent = textAnimation.textContent.slice(0, -1);
        setTimeout(eraseText, 35);
    } else {
        index = 0;
        setTimeout(typeText, 100); 
    }
}

// Mulai animasi
typeText();

function toggleTheme() {
  const body = document.body;
  const box = document.getElementById('box');
  const box2 = document.getElementById('box2');
  const tgle = document.getElementById('toggle-theme');
  body.classList.toggle('dark-mode');
  box.classList.toggle('dark-mode');
  box2.classList.toggle('dark-mode');
  tgle.classList.toggle('dark-mode');
  // body.classList.toggle('light-mode');
}

// Event listener untuk tombol tema gelap/terang
const themeToggleBtn = document.getElementById('toggle-theme');
themeToggleBtn.addEventListener('click', toggleTheme);
