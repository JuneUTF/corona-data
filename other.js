function vietnam() {
    let vietnam = document.getElementById('vietnam');
    let japan = document.getElementById('japan');
    vietnam.style.display = "block";
    let vietnams = document.getElementById('vietnam-data')
    vietnams.style.backgroundColor = 'rgb(59, 74, 96)';
    japan.style.display = 'none';
    let japans = document.getElementById('japan-data')
    japans.style.backgroundColor = '#b2bcc9';
}

function japan() {
    let vietnam = document.getElementById('vietnam');
    let japan = document.getElementById('japan');
    japan.style.display = "block";
    vietnam.style.display = 'none';
    let vietnams = document.getElementById('vietnam-data')
    vietnams.style.backgroundColor = '#b2bcc9';
    let japans = document.getElementById('japan-data')
    japans.style.backgroundColor = 'rgb(59, 74, 96)';
}
vietnam();
//JS Text;
//JS btn menu
function showmenu() {
    let showmenu = document.getElementById('headermobile');
    let i = document.querySelector('.active');
    let showmenubtn = document.getElementById('showmenubtn');
    showmenu.classList.toggle('active');
    if (i == null) {
        showmenubtn.innerHTML = `<img src="./menu-active.svg">`;
        showmenu.classList.remove('activedlt');

    } else {
        showmenu.classList.add('activedlt');
        showmenubtn.innerHTML = `<img src="./menu.svg">`;

    }
}
//Xoa active animation
function activedlt() {
    let showmenu = document.getElementById('headermobile');
    showmenu.classList.remove('active');
    showmenu.classList.add('activedlt');
    let showmenubtn = document.getElementById('showmenubtn');
    showmenubtn.innerHTML = `<img src="./menu.svg">`;
}
//xoa menu show 
function btndlt() {
    document.getElementById('apivirut').style.display = 'none';
    document.getElementById('apiweb').style.display = 'none';
}
//active showvirut
function showvirut() {
    document.getElementById('apivirut').style.display = 'none';
    document.getElementById('apiweb').style.display = 'block';
}
//active showapi
function showapi() {
    document.getElementById('apiweb').style.display = 'none';
    document.getElementById('apivirut').style.display = 'block';

}
//random color 20057
let colorName = ["red", "orange", "yellow", "lime", "green", "teal", "moccasin", "SlateBlue", "Coral", "MediumTurquoise", "Sienna", "snow"];
let ColorLogo;
setInterval(() => {
    ColorLogo = colorName[Math.floor(Math.random() * colorName.length)];
    document.getElementById('colorlogo').style.color = ColorLogo;
    document.getElementById('logoweb').style.color = ColorLogo;
    // console.log(ColorLogo);
}, 2000)