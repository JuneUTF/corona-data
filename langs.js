function tiengviet() {
    // btn ngôn ngữ
    let TiengViet = document.getElementById('tiengviet');
    let Japannes = document.getElementById('japanes');
    TiengViet.style.backgroundColor = 'rgb(59, 74, 96)';
    Japannes.style.backgroundColor = '#b2bcc9';
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
        // Số Ngày Nhiễm
    let DayWorld = Math.floor(((new Date().getTime()) - (new Date("dec 08,2019 00:00:00").getTime())) / (1000 * 60 * 60 * 24));
    let DayVN = Math.floor(((new Date().getTime()) - (new Date("jan 23,2020 00:00:00").getTime())) / (1000 * 60 * 60 * 24));
    let DayJP = Math.floor(((new Date().getTime()) - (new Date("may 08,2020 00:00:00").getTime())) / (1000 * 60 * 60 * 24));
    let TimeData = ` (  ${new Date().getDate() }/${ new Date().getMonth()+1} )`;
    langes('name-date', TimeData);
    langes("text-virut", `
    <p>- Ngày <span>8/12/2019 </span>ghi nhận ca nhiễm đầu tiên là một người <span>đàn ông</span> sinh sống ở <span>TP.Vũ Hán (Trung Quốc)</span>.</p>
    <p>- Tính đến ngày <span>${TimeData}</span> trải qua <span> ${DayWorld} </span> ngày cả thế giới ghi nhận <span id="worldcases"></span> ca nhiễm và <span id="worlddeath"></span> ca tử vong </p>
    <p>- Ngày <span> 23/1/2020 Việt Nam</span> nghi nhận ca nhiễm đầu tiên <span>[${DayVN}] Ngày</span>.</p>
    <p>- Ngày <span>8/5/2020 Nhật Bản</span> công bố ca nhiễm đầu tiên<span> [${DayJP}] Ngày</span>.</p>`)
}

// tiếng nhật
function japanes() {
    // btn ngôn ngữ
    let TiengViet = document.getElementById('tiengviet');
    let Japannes = document.getElementById('japanes');
    Japannes.style.backgroundColor = 'rgb(59, 74, 96)';
    TiengViet.style.backgroundColor = '#b2bcc9';
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