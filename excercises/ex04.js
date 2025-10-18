let totalNumber = 0;
$("#needy-button").click(function () {
    totalNumber = totalNumber + 3;
    $("#needy-button").html(" ok i bet you cant click it more than " + totalNumber + " times");

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

