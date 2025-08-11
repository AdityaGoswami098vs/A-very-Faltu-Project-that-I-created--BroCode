const dayName = document.getElementById("dayName");
const submit = document.getElementById("submit");
const display = document.getElementById("display");

// List of valid days (lowercase for easy matching)
const validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

submit.onclick = function() {
    const userInput = dayName.value.trim().toLowerCase();

    if (validDays.includes(userInput)) {
        display.textContent = `The day is ${capitalize(userInput)}`;
    } else {
        display.textContent = `${capitalize(dayName.value.trim())} is NOT a day...`;
    }
};

function capitalize(word) {
    if (!word) return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
};