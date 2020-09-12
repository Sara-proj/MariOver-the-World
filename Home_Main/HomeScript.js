//בס"ד
//animations in the background
//using random to select an image to be animated
function screen() {
    var x1, x2, x3, x4;
    var images = [];
    images = document.getElementsByTagName("img");
    setInterval(function () {
        x1 = Math.round(Math.random() * 50) + 2;
        x2 = Math.round(Math.random() * 100) + 2;
        x3 = Math.round(Math.random() * 120) + 2;
        x4 = Math.round(Math.random() * 150) + 2;
        //alert(x1 + "  " + x2 + " " + x3 + " " + document.getElementsByTagName("img").length);
        images[x1].classList.add("animated_div");
        images[x2].classList.add("animated_div");
        images[x3].classList.add("animated_div");
        images[x4].classList.add("animated_div");
    }, 1000)
}

var players = [], userName = "", password, step, save, currentUser, user;
//טופס כניסה למשחק
//פתיחת הטופס
function login() {
    document.getElementById('modal').style.display = 'block';
}
//save details at the local storage
function viewName() {
    password = document.getElementById("password").value;
    if (!password) {//empty field
        document.getElementById("password").style.backgroundColor = "red";
        document.getElementById("password").placeholder = "לא הוקשה סיסמא";
        setTimeout(function () { document.getElementById("password").style.backgroundColor = "white"; }, 800);
        return;
    }
    if (typeof window.localStorage) {
        currentUser = document.getElementById("password").value;
        localStorage.setItem("currentUser", currentUser);
        userName = document.getElementById("enterName").value;
        if (userName == "") {
            if (localStorage.getItem(currentUser)) { //exists      
                existingUser();
            }
            else {//empty field
                document.getElementById("enterName").style.backgroundColor = "red";
                document.getElementById("enterName").placeholder = "לא הוקש שם";
                setTimeout(function () { document.getElementById("enterName").style.backgroundColor = "white"; }, 400);
                return;
            }
        }
        else {//new user
            user = {
                name: userName,
                mode: false,
                score: 0,
                cntCountry: 0,
                gameDate: "",
                saveIndex: 0,
                saveUrl: ""
            }
            document.getElementById('history').style.visibility = "hidden";
            document.getElementById('date').style.visibility = "hidden";
        }
    }
    else
        alert("it's impossible to save your details since there is no local storage available");
    document.getElementsByClassName('footer')[0].removeAttribute('hidden');
}


//פונקציה לסגירת הטופס
function noDisplay() {
    document.getElementById('modal').style.display = 'none';
}
function existingUser() {
    user = JSON.parse(localStorage.getItem(password));
    userName = user.name;
    document.getElementById('enterName').value = userName;
    date1 = user.gameDate;
    date1 = date1.slice(0, date1.indexOf("GMT"));
    if (user.gameDate != "")
        document.getElementById('date').innerHTML += " " + date1;
    else
        document.getElementById('date').style.visibility = "hidden";
    user.gameDate = Date();
 
}
function sumbit() {

    //document.getElementById('goBack').value;
    user.mode = document.getElementById('isTablet').value;
    localStorage.setItem(currentUser, JSON.stringify(user));
    localStorage.setItem("country", 0);
    window.open("InstructionsPage.html");
}
