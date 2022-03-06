let callToAction = document.querySelector(".cta");
let rfshBtn = document.querySelector(".button");

let form = document.querySelector("#dateform");
let date = document.querySelector("#date");

const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
];

function getPersonality(gender, day) {
    const maleDayNames = [
        "kwasi",
        "kwadwo",
        "kwabena",
        "kwaku",
        "yaw",
        "kofi",
        "kwame",
    ];

    const femaleDayNames = [
        "akosua",
        "adwoa",
        "abenaa",
        "akua",
        "yaa",
        "afua",
        "ama",
    ];

;

    let femaleDays = [
        
    ];
    let maleDays = [
        
    ];

    if (gender === "male") {
        return [maleDays[day], maleDayNames[day]];
    } else {
        return [femaleDays[day], femaleDayNames[day]];
    }
}

function getWeekDay(date) {
    let fullDate = new Date(
        Number(date.substring(0, 4)),
        Number(date.substring(5, 7) - 1),
        Number(date.substring(8, 10))
    );

    return fullDate.getDay();
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let gender = form.gender.value;
    if (date.value === "") {
        alert("Please provide a valid date");
        return;
    } else if (gender === "") {
        alert("Please fill in your gender");
        return;
    }
    let day = getWeekDay(date.value);
    let weekDay = daysOfWeek[day];
    let personality = getPersonality(gender, day);
    

    title.innerHTML = `Your Akan name is ${personality[1].replace(/^\w/, (c) =>
        c.toUpperCase()
    )}<br>( Born on ${weekDay.replace(/^\w/, (c) => c.toUpperCase())})`;

    rfshBtn.style = "display: block; animation: appear 0s;";
});


const title = document.getElementById('title');

const description = document.getElementById ('results');



rfshBtn.addEventListener("click", () => {
    window.location.reload();
});
