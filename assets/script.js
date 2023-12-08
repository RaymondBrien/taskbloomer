// Wait for DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    document.getElementById('answer-box').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }     
    })
    runGame("addition");

});


// GLOBAL VARIABLES
let totalscore = 0;
let dayScore = 0;

/**
 * Calculates today's score only.
 */
function calculateDayScore() {

}

/**
 * Calculates total score.
 */
function calculateTotalScore() {
    let totalPoints = parseInt(document.getElementById('total-points').innerHTML);
    totalPoints + taskComplete();

}

/**
 * Checks if total points are equal or greater to any of the growth points defined.
 */
function growPlant() {
    let growthPoints = [1,2,3,4,6,8,10,12,14,16,18,20,23,26,30];


}

/**
 * Finds the distance to the next growth points value from total points and displays to user.
 */
function untilNextGrowth() {

}


/**
 * Event listener for taskboxes and adds relevant points, once completed by user, to total points score.
 */
function taskComplete() {
    let completedThreePoints = document.getElementById('task-a-check');
    let completedTwoPoints = document.getElementById('task-b-check');
    let completedOnePoint = document.getElementById('task-c-check');
    let taskValue = document.getElementsByClassName('checkbox');

    if (completedThreePoints.addEventListener('click')) {
         parseInt(calculateTotalScore.value) + 3;
    } else if (completedTwoPoints.addEventListener('click')) {
         parseInt(calculateTotalScore.value) + 2;
    } else if (completedOnePoint.addEventListener('click')) {
         parseInt(calculateTotalScore.value) + 1;
    } else {
        alert(`Unknown task value ${taskValue.value}`);
        throw(`Unknown task value ${taskValue.value}. Aborting!`);
    }
    return calculateTotalScore();
}

/**
 * Allows user to reset the tasks at a specific time.
 */
 function setGoalResetTime() {

 }