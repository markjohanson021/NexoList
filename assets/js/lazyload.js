var url = window.location.href;

if (url.indexOf("#") < 0) {
    stop;
} if (url.indexOf("#r") > -1) {
    console.log("Redirecting...");
    click_id = location.href.split('#r').splice(1).join('#r');
    window.location.replace(click_id);
    stop;
} if (url.indexOf("#pop") > -1) {
    console.log("redirect...");
    var timeDelay = 100;
    setTimeout(loadXML, timeDelay);

    function loadXML() {
        var timeDelay = 100;
        var whats = "https://www.whatsmyreferer.com/";

        var adframe = document.querySelector("body > script:nth-child(7)");
        if (adframe == null) {
            console.log("Not");
            setTimeout(loadXML, timeDelay);
        }
        var adframeSRC = document.querySelector("body > script:nth-child(7)").src;
        if( adframeSRC.indexOf('popads') == -1){
            // Not Found world
            console.log("POP not in element");
            console.log(adframeSRC);
            setTimeout(loadXML, timeDelay);
          }
        else {
            console.log("Visable");
            var myUrl = document.querySelector("body > script:nth-child(7)").src;
            // Execute request
            var oReq = new XMLHttpRequest();
            
            oReq.addEventListener("load", function () {
                console.log(this.responseText);
                anl = this.responseText.split("url': '")[1].split("',")[0];
                console.log(anl);
                window.location.replace(whats);
                //location.href = anl;
              

            });
            // Or post, etc
            oReq.open("GET", myUrl);
            oReq.send();
        }



    }

} if (url.indexOf("#ad") > -1) {
    console.log("checking...");
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var timeDelay = 100;
    setTimeout(loadXML, timeDelay);

    function loadXML() {
        var timeDelay = 500;

        var adframe = document.querySelector("#SC_TBlock_710978 > div > div:nth-child(1) > div > a");
        if (adframe == null) {
            console.log("Not");
            setTimeout(loadXML, timeDelay);
        }
        else {
            console.log("Visable");
            // Execute request
            var oReq = new XMLHttpRequest();
            var myUrl = document.querySelector("body > script:nth-child(6)").src;
            oReq.addEventListener("load", function () {
                console.log(this.responseText);
                anl = this.responseText.split('lb_redirect":"//')[1].split('"}')[0];
                console.log(anl);
                var number = Math.floor(Math.random() * 2) + 1;
              console.log(number);
              if (number == 999){
                location.href = "https://"+ anl;
              } else{
                  stop;
              }

            });
            // Or post, etc
            oReq.open("GET", proxy + myUrl);
            oReq.send();
        }



    }

};