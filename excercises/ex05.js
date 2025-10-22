let count = 0;
let colors = ["Orchid", "Coral", "Hot Pink", "Plum"];
let secretcount = 0;
let mood = ""

$("#needy-button").click(function () {
    count = count + 1;
    secretcount = secretcount + 1;
    if (count < 5) { mood = " fresh and happy" };
    if ((count >= 5) && (count <= 10)) { mood = " keep pushing" };
    if (count > 10) { mood = " so tired!" };
    
    if (count % 4 === 0) { secretcount = 0; } // new line
    $("#needy-button").html("Clicks: " + count + " Color: " + colors[secretcount] + mood);
    $("body").css("background-color", colors[secretcount]);

});

