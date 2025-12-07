$("#creature").click(function() {
  $("#status").text("You clicked me! 🐾");
  $("#creature").css("background", "lavender");
});

$("#creature").hover(
  function() { $("#status").text("You’re close... 👀"); },
  function() { $("#status").text("You left me :("); }
);

$("#creature").dblclick(function() {
  $("#status").text("You woke me up!! 😳");
  $("#creature").css("transform", "scale(1.2)");
});

$(document).keydown(function(event) {
  $("#status").text("You pressed: " + event.key);
});
$(document).mousemove(function(event) {
  $("#creature").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
});