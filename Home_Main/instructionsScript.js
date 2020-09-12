var colors = ["#90c7a4","#ea7c6b"],i=0;
function changeColor() {
    setInterval(function () {
        document.getElementsByClassName('inform')[0].style.color = colors[i++];
        if (i == colors.length)
            i = 0;
    },2000);
}
