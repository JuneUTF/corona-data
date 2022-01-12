//random color 20057
setInterval(() => {
    ColorLogo = colorName[Math.floor(Math.random() * colorName.length)];
    document.getElementById('colorlogo').style.color = ColorLogo;
    // console.log(ColorLogo);
}, 2000)
let DataFront = ['HTML', 'CSS', 'Javascript', 'JavaScript frameworks '];
let DataBack = ['Node.JS', 'PHP', 'Java', 'Python', 'MySQL', 'SQL'];
var i = -1;
addEventListener('keypress', (keyclick) => {
    if (keyclick.keyCode == 13) { i++ }
    if (keyclick.keyCode == 32) { i-- }
    about();
    web();
    html();
    css();
    js();
    responsive();
    corona();
})

function about() {
    let name = document.getElementsByClassName('name');
    let named = document.getElementsByClassName('named');
    if (i == 0) {
        var audio = new Audio('date.mp3');
        audio.play();
        document.getElementById('date').textContent = (new Date().getFullYear() + '年' + new Date().getMonth() + 1 + '月' + new Date().getDate() + '日')
    }
    if (i == 1) {
        name[0].classList.toggle('active-name');
        var audio = new Audio('name.mp3');
        audio.play();
    }
    if (i == 2) { named[0].classList.toggle('active-named'); }
    if (i == 3) { name[1].classList.toggle('active-name'); }
    if (i == 4) {
        named[1].classList.toggle('active-named');
        var audio = new Audio('schools.mp3');
        audio.play();
    }
    if (i == 5) { name[2].classList.toggle('active-name'); }
    if (i == 6) { named[2].classList.toggle('active-named') }
    if (i == 7) {
        document.getElementById('nametitle').classList.toggle('active-nametitle');
        var audio = new Audio('Title.mp3');
        audio.play();
    }
}

function web() {
    let frontback = document.getElementsByClassName('frontback');

    if (i == 8) {
        document.getElementById('about').style.display = 'none';
        document.getElementById('web').style.display = 'block';
        var audio = new Audio('front-back.mp3');
        audio.play();
    }
    if (i == 9) {
        frontback[0].classList.toggle('active-web')
        frontback[1].classList.toggle('active-web')
    }
    if (i == 10) {
        document.getElementsByClassName('show-front')[0].classList.toggle('showfront')
        var audio = new Audio('front.mp3');
        audio.play();
    }
    if (i == 11) {
        document.getElementsByClassName('show-back')[0].classList.toggle('showback')
        var audio = new Audio('back.mp3');
        audio.play();
    }

}