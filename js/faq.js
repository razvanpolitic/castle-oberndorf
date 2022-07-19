//Jonas Schmedtmann, 2022. Advanced CSS and Sass: Flexbox, Grid, Animations and More! [Udemy Course], Available at: <https://www.udemy.com/course/advanced-css-and-sass/> 

var acc = document.getElementsByClassName("accordeon-animated-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}