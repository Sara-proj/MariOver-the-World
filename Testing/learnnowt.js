var j = 0, index = 1, stop, i = 1, flag = false, p = 5, score = 0, m = 0, clear, sum = 0, flag = false, h = 100, key1, obj;
var thisCountry, isGo;
var states =
    [
        ["השפה הבינלאומית היא גרמנית", "דמוקרטיה= שוויון זכויות", "טריטוריה זהו שטח המשותף לכל מדינות אירופה", " מונרכי - שלטון של מלך", "שגרירות זהו ניסיון ריגול במדינה אויבת",
            "או'ם= אומות מאוחדות", "סנקציה- הטלת חרם על מדינה תוקפנית", "מדינות סירוב אלו מדינות שאינן חברות באו'ם", "מים טריטראלים- שטח ימי השיך למדינה הקרובה", " משטר טוטליטארי זהו שלטון של אדם עריץ", "מדינה דמוקרטית זוהי מדינה שאינה מכירה בקיומה של ישראל",
            0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
        ["בסוריה יש מעל ל-28 מליון אנשים", "נשיא סוריה הוא באש אל אסד", "בסוריה מגדלים בעיקר חיטה", "סוריה ממוקמת צפונית מערבית לישראל", "בסוריה משלמים בדולר הסורי", "עיר הבירה של סוריה היא לוב", "נעים להכיר בסורית זה פורצה סעידה ", "הנפט גורם לסוריה להתמוטט", "ישראל במרחק של 219 קילומטר מדמשק", "בסוריה מתנהלת מלחמת אזרחים כבר 8 שנה", "סוריה נמצאת ביבשת אירופה",
            0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
        ["באנגליה התשלום בלירה שטרלינג", "הטמפ' הנמוכה ביותר שנמדדה היא 25", "מנהרת התעלה מחברת בין אנגליה לצרפת", "הנמל הגדול ביותר שמו פולי", "חרדים נמצא בלידס ועוד", "מקור השם אנגליה הוא מקפטן אנגלוי", "כ49 מיליון תושבים"
            , "ההבדל בזמן הוא שעתיים אחורה", "האי הוויט הכי קטן באנגליה", "בירת אנגליה היא לונדון", "הכלכלה באנגליה בעיקר מפחם", 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0],
        ["ראש ממשלת צרפת אדוארד פיליפ", "מגדל איפל נבנה במאה שנה לעיר פריז", "רק 2% מהאולוסיה הם יהודים", "צרפת מדורגת במקום הראשון בתירות", "הקידומת הבין לאומית היא 66", "צורתה במפה כמשושה",
            "בירת צרפת היא פריז", "לצרפת אין זכות הטלת וטו באום", "המוטו הלאומי חירות, שויון, אחווה", "לצרפת אין תחנת חלל", "מגדל פיזה הוא גאוותה של צרפת", 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0]
    ];

var you = localStorage.getItem("user1");
//ניגש למקום המתאים במערך לפי הארץ שהמשתמש בחר בדף בחירת הארצות
//the number of the country is saved at the local-storage
function build() {
    key1 = localStorage.getItem("currentUser");    
    obj = JSON.parse(localStorage.getItem(key1));
    if (obj) {
        document.getElementsByClassName("score")[0].innerHTML = obj.name;
        document.getElementsByClassName("score")[4].innerHTML = " בקרת ב   " + obj.cntCountry+ " ארצות"
        document.getElementsByClassName("score")[3].innerHTML = " צברת  " + obj.score+ " " + "נקודות  ";
    }
    flag = false;
    thisCountry = localStorage.getItem("country");
    document.getElementById("question").innerHTML = states[thisCountry][0]
    setTimeout(function () {
        document.getElementById("objectadd").classList.add("mark");
    }, 3000);
}
//checking the user's answer
function check(x) {
    if (x == states[thisCountry][index + 10]) {
        //right answer;
        document.getElementById("score").style.display = "block";
        document.getElementById("player").src = "images/PROFI.png";
        sum += 5;
        obj.score += 5;
        document.getElementsByClassName("score")[4].innerHTML = " צברת  " + obj.score + " " + "נקודות  ";
    }
    else {
        document.getElementById("player").src = "images/שינוי פרופיל 2.png";
    }
}

function ans(x) {
    if (!flag) {
        document.getElementById("voiceans").play();
        flag = true;
        document.getElementById("question").classList.remove("addAnimation");
        //document.getElementById("objectadd").classList.add("mark");
        //document.getElementById("objectadd").classList.remove("mark");
        check(x);
        setTimeout(function () {
            document.getElementById("score").style.display = "none";
            document.getElementById("question").innerHTML = states[thisCountry][index];
            document.getElementById("player").src = "images/שינוי פרופיל 3.png";
            document.getElementById("question").classList.add("addAnimation");
            index++;
            flag = false;
        }, 4000);
        if (index == 11) {
            flag = true;
            /*הסתימו השאלות*/
            setTimeout("Feedback(sum)", 3000);
            return;
        }
    }
}


function Feedback() {
    document.getElementById("answer").style.display = "none";
    document.getElementById("objectadd").style.display = "none";
    document.getElementsByTagName("h1")[0].style.display = "none";
    document.getElementById("wrapperananas").style.display = "block";
    var temp = document.getElementsByClassName("bonusIce");
    for (var i = 0; i < temp.length; i++) {
        temp[i].style.animationDelay = "30s";
        if (!(i % 3)) {
            temp[i].style.animation = "example 5s reverse 5";
            continue;;
        }
        if (!(i % 2)) {
            temp[i].style.animation = "example 3s reverse 5";
            continue;
        }
        temp[i].style.animation = "example 7s reverse 5";
    }
    document.getElementsByTagName("article")[0].style.display = "block";
    if (sum >= 30) {
        document.getElementsByTagName("article")[0].innerHTML += "צברת " + sum + " נקודות<br>!!כל הכבוד"
        document.getElementById("player").src = "images/PROFI.png";
        document.getElementById('continueG').href = "../learning/learnPage.html";
        isGo = true;
    }
    else {
        document.getElementsByTagName("article")[0].innerHTML += "צברת " + sum + " נקודות<br>אנו בטוחים שבפעם הבאה תצליח יותר.";
        document.getElementById("player").src = "images/שינוי פרופיל 2.png";
        isGo = false;
        document.getElementById('continueG').href = "../Game/mainPage.html";
    }
}
function menu() {
    document.getElementById("spanmenu").style.display = "block";
    document.getElementById("menu").style.width = "15vw";
}
function closemenu() {
    document.getElementById("menu").style.width = "0vw";
}

function saveGame() {
    key1 = localStorage.getItem("currentUser");
    obj = JSON.parse(localStorage.getItem(key1));
    obj.saveUrl = window.localStorage.href;
    if (index < 11)
        obj.saveIndex = index;
    localStorage.setItem(key1, JSON.stringify(obj));
}