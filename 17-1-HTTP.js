function request(type){
    req.open("GET", "http://eloquentjavascript.net/author", true;
    req.setRequestHeader("Accept", type); 
    req.addEventListener("load", function() {
        console.log(req.status);
    });
    req.send(null);
}


var types = ["text/html","application/json", "text/plain" ];
