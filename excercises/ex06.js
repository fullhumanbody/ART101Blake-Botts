var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];



function makeImage() {
    if (colors[colorCount] == "Orchid") {
        $("body").append("<img width=50 src='images/orchid.png'>");
    }
}


function makeImage2(imageName) {
    if (colors[colorCount] == imageName) {
        $("body").append("<img width=50 src='images/" + imageName + ".png'>");
    }
}

function redundant() {

    $("body").css("background-color", colors[colorCount]);
}


$("#needy-button").click(function () {
    if (count < 5) { mood = "gresh and happy"; }
    else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
    else { mood = "so tired"; }
    $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);

    redundant();

    makeImage();
    makeImage2("Coral");

    count = count + 1;
    colorCount = colorCount + 1;
    if (colorCount == 4) { colorCount = 0; }
});



$(".color-button").click(function () {
    paintPage(this.id);
});
