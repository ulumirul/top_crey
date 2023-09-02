// var i = 0;
// var txt = 'VisitKlaten[dot]Com - Peta Pariwisata dan Media Iklan Di Kabupaten Klaten. Merupakan Media Informasi Pariwisata, Serba-Serbi Pariwisata dan Media Iklan di area Klaten, Surakarta, Jogja, Karanganyar, Boyolali, Sragen dan Sekitarnya'; /* isi dengan teks yang diinginkan */
// var speed = 50; /* Kecepatan atau durasi efek dalam milidetik */

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
        setTimeout(typeText, 70); // Waktu penundaan antar karakter
    } else {
        setTimeout(eraseText, 100); // Tunggu 1 detik sebelum menghapus teks
    }
}

function eraseText() {
    if (textAnimation.textContent.length > 0) {
        textAnimation.textContent = textAnimation.textContent.slice(0, -1);
        setTimeout(eraseText, 35); // Waktu penundaan antar karakter saat menghapus
    } else {
        index = 0;
        setTimeout(typeText, 100); // Tunggu 1 detik sebelum mulai mengetik ulang
    }
}

// Mulai animasi
typeText();
// gelap terang
function toggleTheme() {
  const body = document.body;
  const box = document.getElementById('box');
  const tgle = document.getElementById('toggle-theme');
  body.classList.toggle('dark-mode');
  box.classList.toggle('dark-mode');
  tgle.classList.toggle('dark-button');
  // body.classList.toggle('light-mode');
}

// Event listener untuk tombol tema gelap/terang
const themeToggleBtn = document.getElementById('toggle-theme');
themeToggleBtn.addEventListener('click', toggleTheme);
// animasi ketikan teks