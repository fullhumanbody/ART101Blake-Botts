let mainTitle = "<h1 style='text-align: center;'>-----------Exploring a Mountain Forrest-----------</h1>";
let introtext = "<p>Up here, the air has the sharp scent of pine and damp earth. Up here, the mountains stand watch, and the trees see everything you do. There is a quiet, peacefulness here, one that only asks to be gently respected.</p>";
let sectionHeadings = [
    "With Love for the Earth",
    "With Love for Natural Ecosystems"
];

let section1 = {
    heading: sectionHeadings[0],
    text: "<p>Here, the land has contorted and shaped itself into a beautiful figure of rough horizons. Here, the land gives back to its inhabitants, and its inhabitants back to the land.</p>"
};

let section2 = {
    heading: sectionHeadings[1],
    text: "<p>Each connection, no matter how small, plays a small role in a larger balance of giving and receiving. The harmonious nature of natural ecosystems serves as a reminder to us that loss and gain are ultimately the same.</p>"
};

// Print to page using jQuery
$("#main-title").append(mainTitle );
$("#intro-text").append(introtext);
$("#section1").append("<h2 class='customhigh1' style='text-align: center;'>" + section1.heading + "</h2>");
$("#section1").append(section1.text);
$("#section2").append("<h2 class='customhigh2' style='text-align: center;'>" + section2.heading + "</h2>");
$("#section2").append(section2.text);
