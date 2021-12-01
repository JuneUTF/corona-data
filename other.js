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