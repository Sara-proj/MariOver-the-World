//var arr =["img city/407159-PDDRF8-118.jpg",
//    "img city/45980.jpg",
//    "img city/background-scene-with-rain-park_43633-5152.jpg"];
//function build() {
//    x.backgroundImage = "url(" + arr[0] + ")";
//        var x = document.getElementById('back1').style;
//}
var y,cnt=0;
function press()
{
    y = setInterval("up()", 500)
}
function up()
{
    cnt++;
    document.getElementById.style.top += "%";
    cnt++
    if (cnt > 10)
        y = clearInterval;
}