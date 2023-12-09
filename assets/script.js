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
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
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
    growPlant(totalPoints);
}

/**
 * Checks if total points are equal or greater to any of the growth points defined.
 */
function growPlant(value) {
    let growthPoints = [6, 12, 18, 26, 33, 40, 50, (getRandomInt(51, 80), (getRandomInt(81, 100)))];
    let plantImage = document.getElementById('plant-image');
    
    for (i=0; i < growthPoints.length; i++) {
        if (value >= growthPoints[i]) {
            plantImage.innerHTML = `<img src="seed[i]" alt="seed-image">`
        }
    }

}


    