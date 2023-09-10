// Fungsi untuk mengganti tema gelap/terang
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}

// Event listener untuk tombol tema gelap/terang
const themeToggleBtn = document.getElementById('toggle-theme');
themeToggleBtn.addEventListener('click', toggleTheme);
// animasi ketikan teks
const textAnimation = document.getElementById('textAnimation');
// const textToType = "Ini adalah teks yang akan diketikkan secara animasi.";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        textAnimation.textContent += textToType[index];
        index++;
        setTimeout(typeText, 50); 
    } else {
        setTimeout(eraseText, 1000); 
    }
}

function eraseText() {
    if (textAnimation.textContent.length > 0) {
        textAnimation.textContent = textAnimation.textContent.slice(0, -1);
        setTimeout(eraseText, 25); 
    } else {
        index = 0;
        setTimeout(typeText, 1000); 
    }
}

// Mulai animasi
typeText();
