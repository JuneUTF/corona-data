async function getData() {
    const responseChart = await fetch("https://api.apify.com/v2/key-value-stores/Tksmptn5O41eHrT4d/records/LATEST");
    const responseData = await fetch("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST");
    const responseHcKey = await fetch("https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST");
    const dataChart = await responseChart.json();
    const data = await responseData.json();
    const hcKey = await responseHcKey.json();
    return { dataChart, data, hcKey };
}

async function main() {
    const { canhiem, cakhoi, catuvong } = await (await getData()).dataChart;
    document.getElementById("treated").textContent = canhiem[6].quantity.toLocaleString("en-US");
    document.getElementById("nmoihqua").textContent = canhiem[5].quantity.toLocaleString("en-US");
    document.getElementById("cakhoimoi").textContent = cakhoi[6].quantity.toLocaleString("en-US");
    document.getElementById("cakhoihqua").textContent = cakhoi[5].quantity.toLocaleString("en-US");
    document.getElementById("chetmoi").textContent = catuvong[6].quantity.toLocaleString("en-US");
    document.getElementById("chethqua").textContent = catuvong[5].quantity.toLocaleString("en-US");
    if ((canhiem[6].quantity - canhiem[5].quantity) > 0) {
        document.getElementById("scnm").textContent = ("+") + ((canhiem[6].quantity - canhiem[5].quantity)).toLocaleString("en-US");
    } else { document.getElementById("scnm").textContent = ((canhiem[6].quantity - canhiem[5].quantity)).toLocaleString("en-US") };
    if ((cakhoi[6].quantity - cakhoi[5].quantity) > 0) {
        document.getElementById("sckm").textContent = ("+") + ((cakhoi[6].quantity - cakhoi[5].quantity)).toLocaleString("en-US");
    } else { document.getElementById("sckm").textContent = ((cakhoi[6].quantity - cakhoi[5].quantity)).toLocaleString("en-US") };
    if ((catuvong[6].quantity - catuvong[5].quantity) > 0) {
        document.getElementById("sccm").textContent = ("+") + ((catuvong[6].quantity - catuvong[5].quantity)).toLocaleString("en-US");
    } else { document.getElementById("sccm").textContent = ((catuvong[6].quantity - catuvong[5].quantity)).toLocaleString("en-US") };

    const { infected, treated, recovered, deceased, detail } = await (await getData()).data;
    createData(infected, treated, recovered, deceased);
    const { key } = await (await getData()).hcKey;
    createTable(detail, key);
    createChart(canhiem, "S??? ca nhi???m b???nh", "rgb(201, 48, 44)", "nhiemChart");
    createChart(cakhoi, "S??? ca h??m nay", "rgb(40, 167, 69)", "khoiChart");
    createChart(catuvong, "S??? ca t??? vong", "#666", "tuvongChart");
}

function createData(infected, treated, recovered, deceased) {
    document.getElementById("infected").textContent = infected.toLocaleString("en-US");
    document.getElementById("recovered").textContent = recovered.toLocaleString("en-US");
    document.getElementById("deceased").textContent = deceased.toLocaleString("en-US");
}



function createChart(data, name, color, idChart) {
    var labels = [];
    var dataset = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(data[i].day);
        dataset.push(data[i].quantity);
    }

    var data = {
        labels: labels,
        datasets: [{
            label: name,
            borderLeftColor: color,
            borderColor: color,
            data: dataset,
        }]
    };

    const config = {
        type: 'line',
        data,
        options: {
            tension: 0.3
        }
    };
}

var state_specific = {
    VNM429: {
        name: "Qu???ng Ninh"
    },
    VNM444: {
        name: "T??y Ninh"
    },
    VNM450: {
        name: "??i???n Bi??n"
    },
    VNM451: {
        name: "B???c K???n"
    },
    VNM452: {
        name: "Th??i Nguy??n"
    },
    VNM453: {
        name: "Lai Ch??u"
    },
    VNM454: {
        name: "L???ng S??n"
    },
    VNM455: {
        name: "S??n La"
    },
    VNM456: {
        name: "Thanh H??a"
    },
    VNM457: {
        name: "Tuy??n Quang"
    },
    VNM458: {
        name: "Y??n B??i"
    },
    VNM459: {
        name: "H??a B??nh"
    },
    VNM460: {
        name: "H???i D????ng"
    },
    VNM4600: {
        name: "H???i Ph??ng"
    },
    VNM461: {
        name: "H??ng Y??n"
    },
    VNM462: {
        name: "H?? N???i"
    },
    VNM463: {
        name: "B???c Ninh"
    },
    VNM464: {
        name: "V??nh Ph??c"
    },
    VNM466: {
        name: "Ninh B??nh"
    },
    VNM467: {
        name: "H?? Nam"
    },
    VNM468: {
        name: "Nam ?????nh"
    },
    VNM469: {
        name: "Ph?? Th???"
    },
    VNM470: {
        name: "B???c Giang"
    },
    VNM471: {
        name: "Th??i B??nh"
    },
    VNM474: {
        name: "H?? T??nh"
    },
    VNM475: {
        name: "Ngh??? An"
    },
    VNM476: {
        name: "Qu???ng B??nh"
    },
    VNM477: {
        name: "?????k L???k"
    },
    VNM478: {
        name: "Gia Lai"
    },
    VNM479: {
        name: "Kh??nh H??a"
    },
    VNM480: {
        name: "L??m ?????ng"
    },
    VNM481: {
        name: "Ninh Thu???n"
    },
    VNM482: {
        name: "Ph?? Y??n"
    },
    VNM483: {
        name: "B??nh D????ng"
    },
    VNM4834: {
        name: "Ti???n Giang"
    },
    VNM4835: {
        name: "?????k N??ng"
    },
    VNM484: {
        name: "B??nh Ph?????c"
    },
    VNM485: {
        name: "B??nh ?????nh"
    },
    VNM486: {
        name: "Kon Tum"
    },
    VNM487: {
        name: "Qu???ng Nam"
    },
    VNM488: {
        name: "Qu???ng Ng??i"
    },
    VNM489: {
        name: "Qu???ng Tr???"
    },
    VNM490: {
        name: "Th???a Thi??n Hu???"
    },
    VNM491: {
        name: "???? N???ng"
    },
    VNM495: {
        name: "B?? R???a ??? V??ng T??u"
    },
    VNM496: {
        name: "B??nh Thu???n"
    },
    VNM497: {
        name: "?????ng Nai"
    },
    VNM498: {
        name: "An Giang"
    },
    VNM499: {
        name: "C???n Th??"
    },
    VNM500: {
        name: "?????ng Th??p"
    },
    VNM501: {
        name: "TP. H??? Ch?? Minh",
    },
    VNM502: {
        name: "Ki??n Giang"
    },
    VNM503: {
        name: "Long An"
    },
    VNM504: {
        name: "B???n Tre"
    },
    VNM505: {
        name: "H???u Giang"
    },
    VNM506: {
        name: "B???c Li??u"
    },
    VNM507: {
        name: "C?? Mau"
    },
    VNM508: {
        name: "S??c Tr??ng"
    },
    VNM509: {
        name: "Tr?? Vinh"
    },
    VNM510: {
        name: "V??nh Long"
    },
    VNM511: {
        name: "Cao B???ng"
    },
    VNM512: {
        name: "H?? Giang"
    },
    VNM5483: {
        name: "L??o Cai"
    }
}

var colors = [
    "rgb(247, 247, 247)",
    "rgb(197, 197, 115)",
    "rgb(255, 156, 7)",
    "rgb(255, 121, 7)",
    "rgb(224, 28, 28)",
    "rgb(247, 2, 2)",
]

function createTable(detail, key) {
    for (let i = 0; i < detail.length; i++) {
        if (i < 21) { var tr = document.createElement("tr"); }

        // color mau tinh trong maps
        for (const property in state_specific) {
            if (state_specific[property].name.toLowerCase() == detail[i].name.toLowerCase()) {
                state_specific[property].color = setColorMap(parseInt(detail[i].cases), colors);

                state_specific[property].description = `
                  <span>S??? ca nhi???m: <badge>${detail[i].cases}</badge></span><br>
                  <span>S??? ca kh???i: <badge>${detail[i].casesToday}</badge></span><br>
                  <span>S??? ca t??? vong: <badge>${detail[i].death}</badge></span>
                `
            }
        }
        //data bang so  luong nhiem 
        var tdName = document.createElement("td");
        if (i < 21) { tdName.textContent = detail[i].name; }

        var DataBackGround = document.createElement("td1");
        if (detail[i].cases > 10000) {
            DataBackGround.style.borderLeftColor = "rgb(246, 81, 81)";
        } else if (3001 < detail[i].cases < 10001) {
            DataBackGround.style.borderLeftColor = "rgb(255, 165, 0)";
        } else if (1001 < detail[i].cases < 3001) {
            DataBackGround.style.borderLeftColor = "rgb(247, 188, 25)";
        } else if (301 < detail[i].cases < 1001) {
            DataBackGround.style.borderLeftColor = "rgb(247, 244, 74)";
        } else if (detail[i].cases < 301) {
            DataBackGround.style.borderLeftColor = "rgb(255, 255, 255)";
        }
        if (i < 21) { DataBackGround.style.borderLeftWidth = ((detail[i].cases / detail[0].cases) * 180) + "px" };

        var DataNhiem = document.createElement("td2");
        var DataNhiemMoi = document.createElement("td3");
        DataNhiemMoi.style.color = 'white';
        if (i < 21) { DataNhiem.textContent = detail[i].cases; }
        if (i < 21) { DataNhiemMoi.textContent = `(+ ${detail[i].casesToday} )`; }

        if (i < 21) { tr.appendChild(tdName); }
        if (i < 21) { tr.appendChild(DataBackGround); }
        if (i < 21) { tr.appendChild(DataNhiem); }
        if (i < 21) { tr.appendChild(DataNhiemMoi); }
        document.getElementById("table").appendChild(tr) // }
    }
    //bang 2 test 
    for (let i = 21; i < detail.length; i++) {
        if (i < 42) { var tr = document.createElement("tr"); }
        var tdName = document.createElement("td");
        if (i < 42) { tdName.textContent = detail[i].name; }

        var DataBackGround = document.createElement("td1");
        if (detail[i].cases > 10000) {
            DataBackGround.style.borderLeftColor = "rgb(246, 81, 81)";
        } else if (3001 < detail[i].cases < 10001) {
            DataBackGround.style.borderLeftColor = "rgb(255, 165, 0)";
        } else if (1001 < detail[i].cases < 3001) {
            DataBackGround.style.borderLeftColor = "rgb(247, 188, 25)";
        } else if (301 < detail[i].cases < 1001) {
            DataBackGround.style.borderLeftColor = "rgb(247, 244, 74)";
        } else if (detail[i].cases < 301) {
            DataBackGround.style.borderLeftColor = "rgb(255, 255, 255)";
        }
        if (i < 42) { DataBackGround.style.borderLeftWidth = ((detail[i].cases / detail[0].cases) * 180) + "px" };
        var DataNhiem = document.createElement("td2");
        DataBackGround.style.width = "180px"
        var DataNhiemMoi = document.createElement("td3");
        DataNhiemMoi.style.color = 'white';
        if (i < 42) { DataNhiemMoi.textContent = `(+ ${detail[i].casesToday} )`; }

        if (i < 42) { DataNhiem.textContent = detail[i].cases; }

        if (i < 42) { tr.appendChild(tdName); }
        if (i < 42) { tr.appendChild(DataBackGround); }
        if (i < 42) { tr.appendChild(DataNhiem); }
        if (i < 42) { tr.appendChild(DataNhiemMoi); }

        document.getElementById("table1").appendChild(tr) // }
    }
    //bang 3 test
    for (let i = 42; i < detail.length; i++) {
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        tdName.textContent = detail[i].name;

        var DataBackGround = document.createElement("td1");
        if (detail[i].cases > 10000) {
            DataBackGround.style.borderLeftColor = "rgb(246, 81, 81)";
        } else if (3001 < detail[i].cases < 10001) {
            DataBackGround.style.borderLeftColor = "rgb(255, 165, 0)";
        } else if (1001 < detail[i].cases < 3001) {
            DataBackGround.style.borderLeftColor = "rgb(247, 188, 25)";
        } else if (301 < detail[i].cases < 1001) {
            DataBackGround.style.borderLeftColor = "rgb(247, 244, 74)";
        } else if (detail[i].cases < 301) {
            DataBackGround.style.borderLeftColor = "rgb(255, 255, 255)";
        }
        DataBackGround.style.borderLeftWidth = ((detail[i].cases / detail[0].cases) * 180) + "px";
        DataBackGround.style.width = "180px"
        var DataNhiem = document.createElement("td2");
        var DataNhiemMoi = document.createElement("td3");
        DataNhiemMoi.style.color = 'white';
        DataNhiemMoi.textContent = `(+ ${detail[i].casesToday} )`;


        DataNhiem.textContent = detail[i].cases;

        tr.appendChild(tdName);
        tr.appendChild(DataBackGround);
        tr.appendChild(DataNhiemMoi);
        tr.appendChild(DataNhiem);
        document.getElementById("table2").appendChild(tr)
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function setColorMap(value) {
    if (value >= 0 && value <= 300) {
        return colors[0];
    } else if (value > 301 && value <= 1000) {
        return colors[1];
    } else if (value > 1001 && value <= 3000) {
        return colors[2]
    } else if (value > 3001 && value <= 10000) {
        return colors[3]
    } else if (value > 10000) {
        return colors[4]
    }
}