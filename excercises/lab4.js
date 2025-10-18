// declaring an array with name myCommutes
let myCommutes = ["car", "bike", "walking", "running", "uber", "friends"];

let mynumber1commute = {
vehicle: true,
vehicletype: "car",
highway: 99,
radioMusic: ["Rap","Rock","Electronic","Jazz"]
}

let bigsentence = "<p> Best 2 commutes: " + myCommutes[0] + ","+ myCommutes[2] + "</p>";

bigsentence = bigsentence + "<p> My favorite commute has the following characteristics: it is done via a " + mynumber1commute.vehicletype
+ ", highway number " + mynumber1commute.highway +", music on the radio such as " + mynumber1commute.radioMusic[0]+"</p>"

$("#output").html(bigsentence);


