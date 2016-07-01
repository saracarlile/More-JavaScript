function request(type){
    var req = new XMLHttpRequest();
    req.open("GET", "http://eloquentjavascript.net/author", false);
    req.setRequestHeader("Accept", type); 
    req.send(null);
    return req.responseText;
}

var types = ["text/html","application/json", "text/plain", "application/rainbows+unicorns" ];

types.forEach(function(type){
    try {
    console.log(type + ":\n", request(type), "\n");
  } catch (e) {
    console.log("Raised error: " + e);
  }
});

//example output
//"text/plain:
//"
//"My name is Marijn Haverbeke. You can email me at marijn@haverbeke.nl, or visit my website, http://marijnhaverbeke.nl .
//"
//"