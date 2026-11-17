var pet_info = {
    name: "Nori",
    weight: 12,
    happiness: 50,
    tricks: 0
};

// Each action has a few responses so Nori does not always say the same thing.
var pet_comments = {
    treat: ["My favorite! Got any more?", "That was worth a purr.", "Snack time is the best time."],
    play: ["You throw it. I'll chase it!", "I almost caught that feather!", "One more round?"],
    exercise: ["That was a lot of walking.", "Do we really need another lap?", "Okay, I need a break."],
    teach: ["High five! Look what I learned."]
};

$(function () {
    checkAndUpdatePetInfoInHtml();

    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);

    // .one() runs this click handler only once for this button, then removes it.
    // Nori can learn the high five once, so repeated clicks cannot award extra tricks.
    // Documentation: https://api.jquery.com/one/
    $('.teach-button').one('click', clickedTeachButton);
});

function clickedTreatButton() {
    pet_info.happiness += 5;
    pet_info.weight += 1;
    checkAndUpdatePetInfoInHtml();
    showPetComment('treat');
}

function clickedPlayButton() {
    pet_info.happiness += 4;
    pet_info.weight -= 1;
    checkAndUpdatePetInfoInHtml();
    showPetComment('play');
}

function clickedExerciseButton() {
    pet_info.happiness -= 3;
    pet_info.weight -= 2;
    checkAndUpdatePetInfoInHtml();
    showPetComment('exercise');
}

function clickedTeachButton() {
    pet_info.tricks += 1;
    pet_info.happiness += 10;
    checkAndUpdatePetInfoInHtml();
    showPetComment('teach');

    // .replaceWith() removes the selected element and puts new HTML in its place.
    // Here it replaces the lesson button with a disabled button showing that the
    // trick is complete. The replacement is a new element, not just a new label.
    // Documentation: https://api.jquery.com/replaceWith/
    $('.teach-button').replaceWith(
        '<button class="teach-button" type="button" disabled>High five learned!</button>'
    );
}

function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();
    updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
    // Keep the values within the ranges shown on the dashboard.
    if (pet_info.weight < 0) {
        pet_info.weight = 0;
    }
    if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
    }
    if (pet_info.happiness > 100) {
        pet_info.happiness = 100;
    }
}

function updatePetInfoInHtml() {
    $('.name').text(pet_info.name);
    $('.weight').text(pet_info.weight);
    $('.happiness').text(pet_info.happiness);
    $('.tricks').text(pet_info.tricks);
}

function showPetComment(action) {
    var comments = pet_comments[action];
    var index = Math.floor(Math.random() * comments.length);
    $('.pet-message').text(comments[index]);
}
