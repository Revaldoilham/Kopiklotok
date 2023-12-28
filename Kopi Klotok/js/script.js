// Tombol menu navigasi saat dibuka melalui tablet dan mobile
const navigasiMenu = document.querySelector('.navigasi-menu');
// saat tombol menu di klik
document.querySelector('#menu').onclick = () => {
    navigasiMenu.classList.toggle('active');
};

// Untuk memutar vide ketika diklik tonton video
document.querySelector(".btn-video").addEventListener("click", function (e) {
    e.preventDefault();
    var video = document.getElementById("tonton");
    video.setAttribute("controls", "");
    video.play();
});