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



$("#creature").on("contextmenu", function(event) {
  event.preventDefault(); 


  const messages = [
    "You gave me a secret pet 🐾✨",
    "Ooo right-click magic! 🔮",
    "That tickles! 😆",
    "A stealthy pet appears... 👻",
    "I feel powerful now 💥"
  ];


  const colors = [
    "lightyellow",
    "lightgreen",
    "lightblue",
    "peachpuff",
    "thistle"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  $("#status").text(randomMessage);
  $("#creature").css("background", randomColor);
});

$("#creatureNameInput").on("input", function() {
  const name = $(this).val();
  $("#creatureName").text(name);
});
