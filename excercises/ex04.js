let totalNumber = 0;

let colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click(function () {
    $("#needy-button").html("Clicks " + totalNumber + " " + colors[totalNumber]+ " " + myDog.ears);
    totalNumber = totalNumber + 1;


});


let catName = "Lazy";

let isFirstClick = true;

$("#personal-buton").click(function () {
    if (isFirstClick) {
        $("#personal-buton").html("my name is " + catName);
    } else {
        $("#personal-buton").html("hello i am a cat");
    }
    isFirstClick = !isFirstClick; // Toggle between true and false

});



let myDog ={
    name: "Lazy",
    ears:2,
    color: "Pink",
    hasKittens: true,
    purr: function(){console.log("grrrrrrrrrrrrrrrrr")},
};


