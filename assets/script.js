// Wait for DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    let checkboxes = document.getElementsByClassName("checkbox");

    for (let checkbox of checkboxes) {
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskComplete(parseInt(checkbox.value));
            } else {
                taskComplete(-checkbox.value);
            }
        });
 
    }
});


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
 * Allows user to reset the tasks at a specific time.
*/
function setGoalResetTime() {
    
}

/**
 * Calculates today's score only.
 */
function calculateDayScore() {
    let dayScore = parseInt(document.getElementById('today-points').innerText);

}

/**
 * Calculates total score.
 */
function taskComplete(value) {

    console.log(value);
    let totalPointsElement = document.getElementById('total-points');
    let totalPoints = parseInt(totalPointsElement.innerHTML);
    totalPoints += value;

    totalPointsElement.innerHTML = totalPoints;
    growPlant();
}