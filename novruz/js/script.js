var novruz = new Date("Mar 20, 2017 00:00:00").getTime();

var x = setInterval(function() {
    var indi = new Date().getTime();
    var qalib = novruz - indi;
    var gun = Math.floor(qalib / (
        1000 * 60 * 60 * 24));
    var saat = Math.floor((qalib % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var deqiqe = Math.floor((qalib % (1000 * 60 * 60)) / (1000 * 60));
    var saniye= Math.floor((qalib%(1000*60))/(1000));
    document.getElementById("novruz").innerHTML = "Novruza "+gun + " gün " + saat + " saat " +
    deqiqe + " dəqiqə "+saniye+" saniyə qalıb";
}, 1000);
