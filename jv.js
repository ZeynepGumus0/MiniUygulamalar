(function(){
    var saat = document.querySelector ('.icerik');
    var ekstraSifir = function(x) {
        return x < 10 ? '0' + x : x;
    };

    var tiktak =function() {
        var saatBicimi = document.getElementById("saatBicimi").value;
        var d = new Date();
        var h = ekstraSifir(d.getUTCHours() + parseInt(saatBicimi));

        var m = ekstraSifir ( d.getUTCMinutes() );
        var s =ekstraSifir ( d.getUTCSeconds() );
        var current_time = [h,m,s].join(':');
        saat.innerHTML = current_time;


    };

    tiktak();

    setInterval(tiktak,1000);

}());
