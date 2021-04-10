function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

function progressScrollBar() {
    let userScroll = document.body.scrollTop || document.documentElement.scrollTop,
        contentHeight = document.getElementById("container").scrollHeight - document.documentElement.clientHeight,
        progress = (userScroll / contentHeight) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
}

window.onscroll = function () {
    progressScrollBar();
};