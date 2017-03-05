var accord = document.getElementsByClassName('accordion');
var i;
for (i = 0; i < accord.length; i++) {
    accord[i].onclick = function() {
        this.classList.toggle("active");
        var pano = this.nextElementSibling;
        if (pano.style.maxWidth) {
            pano.style.maxWidth = null;
            pano.style.padding = "0";
        } else {
            pano.style.maxWidth = "300px";
            pano.style.padding = "10px";
        }
    };
}
