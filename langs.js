function tiengviet() {
    // btn ngôn ngữ
    let TiengViet = document.getElementById('tiengviet');
    let Japannes = document.getElementById('japanes');
    TiengViet.style.backgroundColor = 'rgb(59, 74, 96)';
    Japannes.style.backgroundColor = '#b2bcc9';
    //btn quốc gia
    let VietnamData = document.getElementById('vietnam-data');
    let JapanData = document.getElementById('japan-data');
    VietnamData.textContent = 'Việt Nam';
    JapanData.textContent = 'Nhật Bản';
    // Số Ngày Nhiễm
    var day = Math.floor(((new Date().getTime()) - (new Date("jan 23,2020 00:00:00").getTime())) / (1000 * 60 * 60 * 24));
    let TimeDown = document.querySelector('.timedown');
    // Bảng Nhiễm theo ngày
    let NameTitle = document.getElementsByClassName("name-title");
    NameTitle[0].textContent = "Số Người Nhiễm Virut Corona";
    NameTitle[1].textContent = "Số Người Xuất Viện";
    NameTitle[2].textContent = "Số Người Tử Vong";
    NameTitle[3].textContent = "Tổng Số Người Nhiễm Ở Các Tỉnh";
    NameTitle[4].textContent = "Số Người Nhiễm Virut Corona";
    NameTitle[5].textContent = "Số Người Nhập Viện";
    NameTitle[6].textContent = "Số Người Tử Vong";
    NameTitle[7].textContent = "Tổng Số Người Nhiễm Ở Các Tỉnh";
    var langes = function(ClassName, ClassTitle) {
        var NameClass = document.getElementsByClassName(ClassName);
        for (var i = 0; i < NameClass.length; i++) {
            NameClass[i].textContent = ClassTitle;
        }
    }
    langes("tongcong", "Lỹ Kế");
    langes("homnay", "Hôm Nay ");
    langes("homqua", "Hôm Qua");
    let TimeData = ` ${new Date().getDate() }/ ${ new Date().getMonth()+1} /${new Date().getFullYear()}`;
    langes('name-date', TimeData);
}

// tiếng nhật
function japanes() {
    // btn ngôn ngữ
    let TiengViet = document.getElementById('tiengviet');
    let Japannes = document.getElementById('japanes');
    Japannes.style.backgroundColor = 'rgb(59, 74, 96)';
    TiengViet.style.backgroundColor = '#b2bcc9';
    //btn quốc gia
    let VietnamData = document.getElementById('vietnam-data');
    let JapanData = document.getElementById('japan-data');
    VietnamData.textContent = 'ベトナム国内';
    JapanData.textContent = '日本国内';
    // Số Ngày Nhiễm
    var day = Math.floor(((new Date().getTime()) - (new Date("jan 23,2020 00:00:00").getTime())) / (1000 * 60 * 60 * 24));
    let TimeDown = document.querySelector('.timedown');
    // Bảng Nhiễm theo ngày
    let NameTitle = document.getElementsByClassName("name-title");
    NameTitle[0].textContent = "新型コロナウイルス感染症";
    NameTitle[1].textContent = "退院治療等";
    NameTitle[2].textContent = "死亡者数";
    NameTitle[3].textContent = "都道府県別累積の陽性者";
    NameTitle[4].textContent = "新型コロナウイルス感染症";
    NameTitle[5].textContent = "死亡者数";
    NameTitle[6].textContent = "死亡者数";
    NameTitle[7].textContent = "都道府県別累積の陽性者";
    var langes = function(ClassName, ClassTitle) {
        var NameClass = document.getElementsByClassName(ClassName);
        for (var i = 0; i < NameClass.length; i++) {
            NameClass[i].textContent = ClassTitle;
        }
    }
    langes("tongcong", "合計");
    langes("homnay", "本日 ");
    langes("homqua", "昨日");
    let TimeData = `${ new Date().getMonth()+1} 月 ${new Date().getDate() }日`;
    langes('name-date', TimeData);


}
tiengviet();