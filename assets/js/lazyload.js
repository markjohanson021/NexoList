var main_domain = "https://nexolist.com"
var referrer = document.referrer;
var url = window.location.href;

if (url.indexOf("#") < 0) {
    console.log(referrer);
    stop;
} if (url.indexOf("#r") > -1) {
    console.log("Redirecting...");
    click_id = location.href.split('#r').splice(1).join('#r');
    window.location.replace(click_id);
    stop;
} if (url.indexOf("#pop") > -1) {
    console.log("redirect...");
    //location.href = "https://www.fpcTraffic3.com/raw/click.cgi?account=ralfs30&track=B";
    //stop;
    var timeDelay = 10;
    setTimeout(loadXML, timeDelay);

    function loadXML() {
        var timeDelay = 10;

        var adframe = document.querySelector("body > script:nth-child(9)");
        if (adframe == null) {
            console.log("Not");
            setTimeout(loadXML, timeDelay);
        }
        else {
            console.log("Visable");
            // Execute request
            var oReq = new XMLHttpRequest();
            var myUrl = document.querySelector("body > script:nth-child(9)").src;
            oReq.addEventListener("load", function () {
                console.log(this.responseText);
                anl = this.responseText.split("url': '")[1].split("',")[0];
                console.log(anl);
                location.href = anl;

            });
            // Or post, etc
            oReq.open("GET", myUrl);
            oReq.send();
        }



    }

};