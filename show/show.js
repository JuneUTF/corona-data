//random color 20057
let colorName = ["red", "orange", "yellow", "lime", "green", "teal", "moccasin", "SlateBlue", "Coral", "MediumTurquoise", "Sienna", "snow"];
let ColorLogo;
setInterval(() => {
    ColorLogo = colorName[Math.floor(Math.random() * colorName.length)];
    document.getElementById('namecolor').style.color = ColorLogo;
}, 2000)
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
    console.log(i)
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
        name[0].classList.add('active-name');
        var audio = new Audio('name.mp3');
        audio.play();
    }
    if (i == 2) { named[0].classList.add('active-named'); }
    if (i == 3) { name[1].classList.add('active-name'); }
    if (i == 4) {
        named[1].classList.add('active-named');
        var audio = new Audio('schools.mp3');
        audio.play();
    }
    if (i == 5) { name[2].classList.add('active-name'); }
    if (i == 6) { named[2].classList.add('active-named') }
    if (i == 7) {
        document.getElementById('nametitle').classList.add('active-nametitle');
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
        frontback[0].classList.add('active-web')
        frontback[1].classList.add('active-web')
    }
    if (i == 10) {
        document.getElementsByClassName('show-front')[0].classList.add('showfront')
        var audio = new Audio('front.mp3');
        audio.play();
    }
    if (i == 11) {
        document.getElementsByClassName('show-back')[0].classList.add('showback')
        var audio = new Audio('back.mp3');
        audio.play();
    }

}

function html() {
    if (i == 12) {
        document.getElementById('html').style.display = 'block';
        document.getElementById('web').style.display = 'none';
    }
    if (i == 13) {
        var audio = new Audio('html.mp3');
        audio.play();
        document.getElementsByClassName('tagHtml')[0].classList.add('active-html-width')
    }
    if (i == 14) {
        var audio = new Audio('htmltag.mp3');
        audio.play();
        document.getElementsByClassName('tagHtmlName')[0].classList.add('active-html-height')
    }
}

function css() {
    if (i == 15) {
        document.getElementById('css').style.display = 'block';
        document.getElementById('html').style.display = 'none'
    }
    if (i == 16) {
        var audio = new Audio('CSS.mp3');
        audio.play();
        document.getElementsByClassName('tagCss')[0].classList.add('active-tagcss')
    }
    if (i == 17) {
        var audio = new Audio('CSSTAG.mp3');
        audio.play();
        document.getElementsByClassName('tagCssName')[0].classList.add('active-css')
    }

}

function js() {
    if (i == 18) {
        document.getElementById('js').style.display = 'block';
        document.getElementById('css').style.display = 'none'
    }
    if (i == 19) {
        var audio = new Audio('JS.mp3');
        audio.play();
        document.getElementsByClassName('tagJs')[0].classList.add('active-js')
    }
    if (i == 20) {
        var audio = new Audio('JSTAG.mp3');
        audio.play();
        document.getElementsByClassName('tagJsName')[0].classList.add('active-tagjs')
    }
}

function responsive() {
    if (i == 21) {
        document.getElementById('responsive').style.display = 'block';
        document.getElementById('js').style.display = 'none'
    }
    if (i == 22) {
        var audio = new Audio('responsive.mp3');
        audio.play();
        document.getElementsByClassName('responsive')[0].classList.add('active-responsive')
    }
    if (i == 23) {
        var audio = new Audio('responsive1.mp3');
        audio.play();
        document.getElementsByClassName('spqa')[0].classList.add('active-sp');
    }
    if (i == 24) {
        var audio = new Audio('responsive2.mp3');
        audio.play();
        document.getElementsByClassName('spqa')[1].classList.add('active-sp1')
    }
    if (i == 25) { document.getElementsByClassName('responsive-destop')[0].style.display = 'block' }
    if (i == 26) { document.getElementsByClassName('responsive-mobile')[0].style.display = 'block' }
    if (i == 27) { document.getElementsByClassName('responsive-ipad')[0].style.display = 'block' }
}

function corona() {
    if (i == 28) {
        document.getElementById('corona').style.display = 'block';
        document.getElementById('responsive').style.display = 'none'
    }
    if (i == 29) {
        var audio = new Audio('API.mp3');
        audio.play();
        document.getElementsByClassName('api-json')[0].classList.add('api-json-active')

    }
    if (i == 30) {
        var audio = new Audio('API1.mp3');
        audio.play();
        document.getElementsByClassName('api-qa')[0].classList.add('apijosnactive')
    }
    if (i == 31) {
        var audio = new Audio('API2.mp3');
        audio.play();
        document.getElementsByClassName('api-qa')[1].classList.add('apijosnactive')
    }
    if (i == 32) {
        var audio = new Audio('APIJSON.mp3');
        audio.play();
        document.getElementsByClassName('json-jsqa')[0].classList.add('apijosnactive')
    }
    if (i == 33) {
        var audio = new Audio('APIJSON1.mp3');
        audio.play();
        document.getElementsByClassName('json-jsqa')[1].classList.add('apijosnactive')
    }
    if (i == 34) {
        var audio = new Audio('wariai.mp3');
        audio.play();
        document.getElementsByClassName('wariai')[0].classList.add('active-wariai-height')
    }
    if (i == 35) {
        var audio = new Audio('display.mp3');
        audio.play();
        document.getElementsByClassName('web-display')[0].classList.add('displayactive')
    }
    if (i == 36) {
        var audio = new Audio('webapi.mp3');
        audio.play();
        document.getElementsByClassName('web-huynh')[0].classList.add('huynhactive')
    }
    if (i == 37) {
        var audio = new Audio('otsukare.mp3');
        audio.play();
        document.getElementsByClassName('tsukare')[0].classList.add('activetsukare')
    }
    if (i == 38) {
        var audio = new Audio('.mp3');
        audio.play();
        document.getElementsByClassName('tsukare')[0].textContent = '以上　！！！'
        ocument.getElementsByClassName('tsukare')[0].style.color = 'red';
        document.getElementById('namecolor').style.display = 'none';

    }
    if (i == 39) {
        window.location = "https://juneutf.github.io/corona-data/";
    }


}