var key1, obj;
function openModal(element) {
    var str1 = "ברוך הבא";
    //update the countries counter
    key1 = localStorage.getItem("currentUser");
    if (key1) {
        obj = JSON.parse(localStorage.getItem(key1));
        obj.cntCountry += 1;
        localStorage.setItem(key1, JSON.stringify(obj));
    }//
    //connect to data of the selected country
    document.getElementById("here").src = element.src;
    document.getElementById("selected").style.display = "block";
    myCountry = element.getAttribute("data-country");
    localStorage.setItem("country", myCountry);
}
function close1() {
    document.getElementById("selected").style.display = "none";
}
function opac(element) {
    element.children[0].style.opacity = "1";
    element.children[0].style.color = "red";
}
function xOpac(element) {
    element.children[0].style.color = "transparent";
}
function saveGame() {
    obj = JSON.parse(localStorage.getItem(key1));
    obj.saveUrl = window.localStorage.href;
    localStorage.setItem(key1, JSON.stringify(obj));
}
