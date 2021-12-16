function tiengviet() {
    // btn ngôn ngữ
    let TiengViet = document.getElementById('tiengviet');
    let Japannes = document.getElementById('japanes');
    TiengViet.style.backgroundColor = 'rgb(59, 74, 96)';
    Japannes.style.backgroundColor = '#b2bcc9';
    //btn quốc gia
    // let VietnamData = document.querySelector('#vietnam-data');
    // let JapanData = document.querySelector('#japan-data');
    // VietnamData.textContent = 'Việt Nam';
    // JapanData.textContent = 'Nhật Bản';
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
            NameClass[i].innerHTML = ClassTitle;
        }
    }
    langes("vietnam-data", "Việt Nam")
    langes("japan-data", "Nhật Bản")
    langes("tongcong", "Lỹ Kế");
    langes("homnay", "Hôm Qua ");
    langes("homqua", "Hôm Trước");
    langes("ts", "QĐ.Trường Sa");
    langes("hs", "QĐ.Hoàng Sa");
    langes("webs", "Giới Thiệu");
    langes("virut-data", "Thông Tin Virut")
    let TimeData = ` (  ${new Date().getDate() }/${ new Date().getMonth()+1} )`;
    langes('name-date', TimeData);
    langes("text-virut", `
    <p>- Ngày <span>8/12/2019</span>ghi nhận ca nhiễm đầu tiên là một người <span>đàn ông</span> sinh sống ở <span>TP.Vũ Hán (Trung Quốc)</span>.</p>
    <p>- Tính đến ngày <span>${TimeData}</span> cả thế giới ghi nhiềm <span>XXX</span> ca nhiễm và <span>xxx</span> ca tử vong </p>
    <p>- Ngày <span></p>
    <p>- tinh den ngay llltrai qua xxx ngay o nhat ghi nham 111 ca nhiem va 111 ca tu vong, trong ki viet nam laf 222 ca nhiem va 222 ca tu vong</p>
    <p>- Ngày <span>8/5/2020 Nhật Bản</span> công bố ca nhiễm corona đầu tiên, trải qua <span>XXX</span> ghi nhận <p id="patients-accumulation"></p></p>`)
}

// tiếng nhật
function japanes() {
    // btn ngôn ngữ
    let TiengViet = document.getElementById('tiengviet');
    let Japannes = document.getElementById('japanes');
    Japannes.style.backgroundColor = 'rgb(59, 74, 96)';
    TiengViet.style.backgroundColor = '#b2bcc9';
    //btn quốc gia
    // let VietnamData = document.getElementById('vietnam-data');
    // let JapanData = document.getElementById('japan-data');
    // VietnamData.textContent = 'ベトナム国内';
    // JapanData.textContent = '日本国内';
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

    langes("vietnam-data", "ベトナム国内")
    langes("japan-data", "日本国内")
    langes("tongcong", "合計");
    langes("homnay", "新規 ");
    langes("homqua", "新規(前日)");
    langes("hs", "黃沙諸島");
    langes("ts", "長沙諸島");
    langes("virut-data", "コロナウイルス情報")
    langes("webs", "Web紹介");
    let TimeData = `${ new Date().getMonth()+1} 月 ${new Date().getDate() }日 `;
    langes('name-date', TimeData);
    console.log(TimeData)


}
tiengviet();