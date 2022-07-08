var num = "";
var nokoToken = "";
var inputAuth = document.getElementById("nokoAuth");
var inputTxt = document.getElementById("searchTxt");

inputAuth.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});
inputTxt.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("submit").click();
    }
});


document.getElementById("submit").addEventListener("click", function () {
    projectId = document.getElementById("searchTxt").value;
    nokoToken = document.getElementById("nokoAuth").value;
    num = projectId.toString();

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.nokotime.com/v2/projects/" + num + "/",
        "method": "GET",
        "headers": {
            "X-NokoToken": nokoToken,
            "Content-Type": "application/json"
        },
        "processData": false,
        "data": ""
    };
    $.ajax(settings).done(function (response) {
        console.log(response.minutes / 60);
        document.getElementById("nokoProjectTime").innerHTML = response.minutes / 60 + " Hours";
    });
}
)