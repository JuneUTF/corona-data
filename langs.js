// Số Ngày Nhiễm
let DayWorld = Math.floor(((new Date().getTime()) - (new Date("dec 08,2019 00:00:00").getTime())) / (1000 * 60 * 60 * 24));
let DayVN = Math.floor(((new Date().getTime()) - (new Date("jan 23,2020 00:00:00").getTime())) / (1000 * 60 * 60 * 24));
let DayJP = Math.floor(((new Date().getTime()) - (new Date("may 08,2020 00:00:00").getTime())) / (1000 * 60 * 60 * 24));
let TimeData = ` (  ${new Date().getDate() }/${ new Date().getMonth()+1} )`;
let TimeDataJP = ` (${ new Date().getMonth()+1}月/${new Date().getDate() }日)`;

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
    langes('name-date', TimeData);
    langes("world01", `- Ngày <span>8/12/2019 </span>ghi nhận ca nhiễm đầu tiên là một người <span>đàn ông</span> sinh sống ở <span>TP.Vũ Hán (Trung Quốc)</span>.`)
    langes('world-01', `- Tính đến ngày <span>${TimeData}</span> trải qua <span> ${DayWorld} </span> ngày cả thế giới ghi nhận `);
    langes('world-02', ` ca nhiễm và `);
    langes('world-03', ` ca tử vong .`);
    langes('world02', `<p>- Ngày <span> 23/1/2020 Việt Nam</span> nghi nhận ca nhiễm đầu tiên <span>[${DayVN}] Ngày</span>.</p>
    <p>- Ngày <span>8/5/2020 Nhật Bản</span> công bố ca nhiễm đầu tiên<span> [${DayJP}] Ngày</span>.</p>`);
    langes("text-web", `
    <p>- <span><strong>Web API</strong></span> ( <span>Application Programming Interface</span> ) là một phương thức dùng để cho phép các ứng dụng khác nhau có thể giao tiếp, <span>trao đổi</span> dữ liệu qua lại. Dữ liệu được Web API trả lại thường ở dạng <span>JSON</span> hoặc <span>XML</span> thông qua giao thức <span>HTTP</span> hoặc <span>HTTPS</span>.</p>
    <p>- <strong>API</strong><span> Việt Nam </span>và <span>thế giới</span> được lấy từ <span><a href="https://covid19.gov.vn"target="_blank">https://covid19.gov.vn</a></span> dữ liệu được cập nhật tự động lúc <span>00:00</span> hàng ngày.</p>
    <p>- <strong>API</strong><span> Nhật Bản</span> được lấy từ <span><a href="https://corona.go.jp"target="_blank">https://corona.go.jp</a></span> dữ liệu sẽ được cập nhật ngay sau khi <span><a href="https://corona.go.jp/">https://corona.go.jp/</a></span> cập nhật.</p>
    <p>- Bản đồ Việt Nam được tham khảo ở<span> <a href="https://simplemaps.com/country/vn/"target="_blank">https://simplemaps.com/country/vn/</a> </span></p>`)
}

// tiếng nhật
function japanes() {
    // btn ngôn ngữ
    let TiengViet = document.getElementById('tiengviet');
    let Japannes = document.getElementById('japanes');
    Japannes.style.backgroundColor = 'rgb(59, 74, 96)';
    TiengViet.style.backgroundColor = '#b2bcc9';
    // Bảng Nhiễm theo ngày
    let NameTitle = document.getElementsByClassName("name-title");
    NameTitle[0].textContent = "新型コロナウイルス感染症";
    NameTitle[1].textContent = "退院治療等";
    NameTitle[2].textContent = "死亡者数";
    NameTitle[3].textContent = "都道府県別累積の陽性者";
    NameTitle[4].textContent = "新型コロナウイルス感染症";
    NameTitle[5].textContent = "入院者数";
    NameTitle[6].textContent = "死亡者数";
    NameTitle[7].textContent = "都道府県別累積の陽性者";

    var langes = function(ClassName, ClassTitle) {
        var NameClass = document.getElementsByClassName(ClassName);
        for (var i = 0; i < NameClass.length; i++) {
            NameClass[i].innerHTML = ClassTitle;
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
    langes("world01", `<p>- <span>2019年12月8日</span>、<span>武漢市（中国）</span>に住む<span>男性</span>で最初の感染例が発見されました。</p>`);
    langes('world-01', `- <span>${TimeDataJP}</span> まで <span> ${DayWorld} 日 </span>を過ごして`);
    langes('world-02', `感染者と`);
    langes('world-03', `死亡者を確認されました。`)
    langes('world02', `<p>- <span>2020年1月23日</span>に<span>ベトナムでは</span>最初の感染例が発見されました。<span>[${DayVN}] 日</span></p>
    <p>- <span>2020年8月5日</span>に<span>日本では</span>最初の感染例が発表されました。<span>[${DayJP}] 日</span></p>`)
    langes("text-web", `
    <p>- <span><strong>Web API</strong></span> ( <span>Application Programming Interface</span> )とは、さまざまな<span>アプリケーション</span>が<span>データ</span>をやり取りしたり交換したりできるようにするために使用される方法です。 Web APIによって返されるデータは、通常、<span>HTTP</span>または<span>HTTPS</span>プロトコルを介した<span>JSON</span>または<span>XM</span>L形式です。</span>.</p>
    <p>- ベトナム国内と世界の API は<span> <a href="https://covid19.gov.vn"target="_blank">https://covid19.gov.vn</a> </span> から取得されます、毎日<span>00:00</span>に自動的に更新されます。</p>
    <p>- 日本国内の API は<span><a href="https://corona.go.jp/"target="_blank">https://corona.go.jp/</a></span> から取得されますが更新され次第更新されます。</p>
    - ベトナムの地図は<span> <a href="https://simplemaps.com/country/vn/"target="_blank">https://simplemaps.com/country/vn/</a> </span>で参照されています。`)


}
japanes();