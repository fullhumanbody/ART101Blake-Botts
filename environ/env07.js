// ------------------------------
// 1. Page Content
// ------------------------------
const mainTitle = "<h1 style='text-align: center;'>-----------Exploring a Mountain Forest-----------</h1>";
const introText = `<p>Up here, the air has the sharp scent of pine and damp earth. Up here, the mountains stand watch, and the trees see everything you do. There is a quiet, peacefulness here, one that only asks to be gently respected.</p>`;

const sections = [
    {
        heading: "With Love for the Earth",
        text: "<p>Here, the land has contorted and shaped itself into a beautiful figure of rough horizons. Here, the land gives back to its inhabitants, and its inhabitants back to the land.</p>",
        className: "customhigh1"
    },
    {
        heading: "With Love for Natural Ecosystems",
        text: "<p>Each connection, no matter how small, plays a small role in a larger balance of giving and receiving. The harmonious nature of natural ecosystems serves as a reminder to us that loss and gain are ultimately the same.</p>",
        className: "customhigh2"
    }
];


// 1. Image Rows

const imageRows = [
    ["cloud1.png", "cloud2.png", "cloud3.png", "cloud2.png", "cloud3.png"],
    ["tree2.webp", "Tree1..webp", "tree2.webp", "Tree1..webp"],
    ["ground1.png", "ground2.jpg", "ground3.webp", "owl1.webp", "frg.webp"]
];

const imageBasePath = "images/"; 

const $imageRowsContainer = $("#imageRowsContainer");

imageRows.forEach(row => {
    const $rowDiv = $('<div class="image-container"></div>');
    row.forEach(imgFile => {
        const $imgDiv = $('<div></div>');
        $imgDiv.append(`<img src="${imageBasePath}${imgFile}" />`);
        $rowDiv.append($imgDiv);
    });
    $imageRowsContainer.append($rowDiv);
});


$("#main-title").append(mainTitle);
$("#intro-text").append(introText);

sections.forEach((section, index) => {
    const sectionId = `#section${index + 1}`;
    $(sectionId).append(`<h2 class="${section.className}" style="text-align:center;">${section.heading}</h2>`);
    $(sectionId).append(section.text);
});


// 2. Utility Functions

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function arraysEqual(arr1, arr2) {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
    return arr1.every((val, idx) => val === arr2[idx]);
}


// 3. Chaos Scramble Button

$("#hellobutton").click(function () {
    $(".image-container").each(function () {
        const container = $(this);
        const allImages = container.children("div").clone(true).toArray();
        let currentOrder = allImages.map((_, idx) => idx);
        let newOrder;

        do {
            newOrder = shuffleArray(currentOrder);
        } while (arraysEqual(newOrder, currentOrder) && allImages.length > 1);

        container.empty();
        newOrder.forEach(idx => container.append(allImages[idx]));
    });

    $(".image-container").hide().fadeIn(600);
});

// 4. Hover Effects

function setupHover(sectionId, className, hoverColor) {
    $(sectionId).hover(
        function () {
            $(`.${className}`).css("background-color", hoverColor);
            $(this).css("background-color", hoverColor);
        },
        function () {
            $(`.${className}`).css("background-color", "");
            $(this).css("background-color", "");
        }
    );
}

setupHover("#section1", "customhigh1", "#5b7afd");
setupHover("#section2", "customhigh2", "#17e6e6");


// 5. Click Animations

function setupToggleClick(sectionId) {
    let clicked = false;
    $(sectionId).click(function () {
        const change = clicked ? "-=150px" : "+=150px";
        $(this).animate({
            left: '250px',
            width: change,
            height: change
        });
        clicked = !clicked;
    });
}

setupToggleClick("#section1");
setupToggleClick("#section2");
