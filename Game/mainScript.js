
var cnt = 0, x, y, f, flag = true, timer = 0, iIce = 0, p, flagP = false, point = 0, key1, obj, mainFlag = true, index, quick;
var arr = ["img_city/city1.jpg",
    "img_city/city2.jpg",
    "img_city/city3.jpg",
    "img_city/city4.jpg",
    "img_city/city5.jpg",
    "img_city/city6.jpg",
    "img_city/city7.jpg",
    "img_city/city8.jpg",
    "img_city/city9.jpg"];
var ice = [
    ["img_ice/1NTH.png", "img_ice/2NTH.png", "img_ice/3NTH.png", "img_ice/4NTH.png", "img_ice/5NTH.png", "img_ice/6NTH.png", "img_ice/7NTH.png", "img_ice/8NTH.png", "img_ice/9NTH.png",
        "img_ice/11NTH.png", "img_ice/12NTH.png", "img_ice/13NTH.png"],
    ["img_ice/articksuria.png", "img_ice/ananas2suria.png", "img_ice/ananas3suria.png", "img_ice/annassuria.png",
        "img_ice/avatich2suria.png", "img_ice/ananas1suria.png", "img_ice/articksuria2.png", "img_ice/ananas2suria2.png", "img_ice/ananas3suria2.png", "img_ice/annassuria2.png", "img_ice/avatich2suria2.png", "img_ice/ananas1suria2.png"],
    ["img_ice/artickanglia.png", "img_ice/ananas2anglia.png", "img_ice/ananas3anglia.png", "img_ice/annasanglia.png",
        "img_ice/avatich2anglia.png", "img_ice/ananasanglia.png", "img_ice/artickanglia2.png", "img_ice/ananasanglia2.png", "img_ice/ananas3anglia2.png", "img_ice/annasanglia2.png", "img_ice/avatich2anglia2.png", "img_ice/ananas1anglia.png"],
    ["img_ice/artickzarfat.png", "img_ice/avatich2zarfat2.png", "img_ice/ananas3zarfat.png", "img_ice/annaszarfat.png", "img_ice/avatich2zarfat.png",
        "img_ice/ananaszarfat.png", "img_ice/artickzarfat2.png", "img_ice/ananaszarfat2.png", "img_ice/ananas3zarfat2.png", "img_ice/annaszarfat2.png", "img_ice/avatichzarfat2.png"]];


function back_music() {
    document.getElementById('back').play();
}
//var index = 2;

function build() {
    x = document.getElementById('back1');
    y = document.getElementById('back2');
    x.src = arr[0];
    y.src = arr[1];
    counter = -5;
    myStop = setInterval(function () {
        document.getElementById('boy').style.left = counter + "vw";
        if (counter == 70) {
            clearInterval(myStop);
            moveChild();
            mainFlag = false;
        }
        counter++;
    }, 30);
    key1 = localStorage.getItem("currentUser");
    if (key1) {//!=null
        obj = JSON.parse(localStorage.getItem(key1));
        document.getElementsByClassName("score")[0].innerHTML = obj.name;
        document.getElementsByClassName("score")[5].innerHTML = " בקרת ב   " + obj.cntCountry + " ארצות"
        document.getElementsByClassName("score")[4].innerHTML = " צברת  " + obj.score + " " + "נקודות  ";
        if (obj.mode == "פעיל") {
            document.getElementById('keyboard').style.display = "block";
        }
        index = obj.saveIndex;
    }
    //music();
}
//פונקציה להחלפת תמונות רקע באופן קבוע 

function move(ev, code) {
    var charCode;

    if (!mainFlag) {
        if (!code) {
            quick = 1;
            charCode = ev.which;
            (ev.which) ? ev.which : ev.keyCode;
        }
        else {
            quick = 2;
            charCode = code;
        }
        if (charCode == 39) {
            moveBackground(quick);
            return;
        }
        if (charCode == 13 || charCode == 38) {
            if (flag) {
                f = setInterval(moveBackground(quick), 100);
                flag = false;
                moveChild();
            }
        }
    }
}

function moveBackground(quick) {
    cnt -= quick;
    x.style.marginLeft = cnt + "vw";
    if (cnt == -100) {
        if (document.getElementById('newScore').hidden != "hidden")
            document.getElementById("newScore").setAttribute("hidden", "hidden");
        if (flagP && p) {
            document.getElementById("wrapper").removeChild(p);
            flagP = false;
        }
        x.src = y.src;
        y.src = arr[index++];
        cnt = 0;
        x.style.marginLeft = cnt + "vw";
        if (timer % 2 == 0)
            bonus();
        timer++;
        if (index > 8) {
            index = 0;
        }
    }

}
function questionPage() {
    var position1 = 72, temp2;
    document.getElementById('back').loop = false;
    document.getElementById('back').pause();
    obj.cntCountry++;
    localStorage.setItem(key1, JSON.stringify(obj));
    mainFlag = true;
    temp2 = setInterval(function () {
        document.getElementById("boy").style.left = position1 + "vw";
        position1++;
        if (position1 == 103) {
            clearInterval(temp2);
            window.open("../Testing/learnPage.html");
        }
    }, 40);
}

function moveChild() {
    document.getElementById("boy").classList.add("jump");
    temp = parseInt(document.getElementById("back1").style.marginLeft);
    if (temp < -30 && temp > -60 && flagP) {
        document.getElementById("voicejump").play();
        document.getElementById("newScore").removeAttribute("hidden");
        setTimeout(function () { document.getElementById("newScore").setAttribute("hidden", "hidden"); }, 4000);
        obj.score += 5;
        document.getElementsByClassName("score")[4].innerHTML = " צברת  " + obj.score + " " + "נקודות  ";
    }
    setTimeout(function () {
        document.getElementById("boy").classList.remove("jump");
        clearInterval(f);
        flag = true;
    }, 2100);
}
var bonusInterval;
//פונקצית הוספת אננסים
function bonus() {
    thisCountry = localStorage.getItem("country");
    if (iIce == 11) {
        saveGame();
        questionPage();
    }
    p = document.createElement("img");
    p.src = ice[thisCountry][iIce++];
    p.classList.add("ananas");
    document.getElementById("wrapper").appendChild(p);
    flagP = true;
    clearTimeout(bonusInterval);
    bonusInterval = setTimeout(function () {
        if (flagP)
            document.getElementById("wrapper").removeChild(p);
        flagP = false;
    }, 10000);
}
function menu() {
    document.getElementById("spanmenu").style.display = "block";
    document.getElementById("menu").style.width = "15vw";
}
function closemenu() {
    document.getElementById("menu").style.width = "0vw";
}
//function music() {    
//    document.getElementById('voice').src = src = "../Music/Fun-video-game-app-music.mp3"; 
//}
function saveGame() {
    obj.gameDate = Date();
    obj.saveUrl = window.location.href;
    obj.saveIndex = index;
    localStorage.setItem(key1, JSON.stringify(obj));
}

function printS() {
    window.print();
}
