// Wait for DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    let checkboxes = document.getElementsByClassName("checkbox");

    for (let checkbox of checkboxes) {
        checkbox.addEventListener("checked", function() {
            if (this.getAttribute("data-type") === "checkbox") {
                taskComplete();
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
 * Event listener for taskboxes and adds relevant points, once completed by user, to total points score.
*/
function taskComplete() {
    
    let completedThreePoints = document.getElementById('task-a-check');
    let completedTwoPoints = document.getElementById('task-b-check');
    let completedOnePoint = document.getElementById('task-c-check');
    let taskValue = document.getElementsByClassName('checkbox');
    
    if (completedThreePoints.checked) {
        return 3;
    } else if (completedTwoPoints.checked) {
        return 2;
    } else if (completedOnePoint.checked) {
        return 1;
    } else {
        return 0;
    } 
    calculateTotalScore();
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
function calculateTotalScore() {

    let totalPointsElement = document.getElementById('total-points');
    let totalPoints = parseInt(totalPointsElement.innerHTML);
    totalPoints += taskComplete();

    totalPointsElement.innerHTML = totalPoints;
    growPlant();
}