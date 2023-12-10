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
 * Calculates total score without being reset.
*/
function taskComplete(value) {
    
    console.log(value);
    let totalPointsElement = document.getElementById('total-points');
    let totalPoints = parseInt(totalPointsElement.innerHTML);
    let dayScoreElement = document.getElementById('today-points');
    let dayScore = parseInt(dayScoreElement.innerHTML);

    totalPoints += value;
    dayScore += value;
    
    totalPointsElement.innerHTML = totalPoints;
    dayScoreElement.innerHTML = dayScore;

    growPlant(totalPoints);
}

/**
 * Calculates today's score only. Reset to 0 by the New Day Button.
*/


/**
 * Checks if total points are equal or greater to any of the growth points defined and displays relevant plant image.
 * TODO: plantImage HTML not being set - fix.
 */
function growPlant(value) {
    
    let growthPoints = [6, 12, 18, 26, 33, 40, 50, getRandomInt(51, 80), getRandomInt(81, 100)];
    let images = ['seed0.PNG' , 'seed1.PNG', 'seed2.PNG' , 'seed3.PNG', 'seed4.PNG', 'seed5.PNG' , 'seed6.PNG', 'seed7.PNG'];        
    let plantImage = document.getElementById('plant-image');
    let newImage = '';

    for (let i=0; i < growthPoints.length; i++) {
        if (value >= growthPoints[i]) {
            newImage = `<img src="assets/images/${images[i]}" alt="seed-image">`; // Concatenates the path to the image file name
            console.log(newImage);
            plantImage.innerHTML = newImage;
            console.log(plantImage);
        }
    }
}


/**
 * New day resets the day score count, clears goals and unchecks all checkboxes.
 */
function newDay() {
    
    let newDayButton = document.getElementById('new-day');
    dayScoreElement = document.getElementById('today-points');
    
    newDayButton.addEventListener('click', function() {
        dayScoreElement.innerHTML = 0;
        console.log("new day");
    });
}

    