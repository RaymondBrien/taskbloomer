// Wait for DOM to finish loading before running the game. Finds checkbox value.
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
  

// global variables
let randomArray1 = getRandomInt(51, 70);
let randomArray2 = getRandomInt(70, 100);
let growthPoints = '';
let images = ['seed0.PNG' , 'seed1.PNG', 'seed2.PNG' , 'seed3.PNG', 'seed4.PNG', 'seed5.PNG' , 'seed6.PNG', 'seed7.PNG'];
let growthPointsLevel = {

    easy: [1, 6, 9, 15, 19, 24, 30, 33, 36],
    medium: [3, 6, 9, 15, 18, 24, 30, 40, 52],
    hard: [6, 12, 18, 26, 33, 40, 50, randomArray1, randomArray2]
};


/**
 * Sets growthPoints variable to relevant growthPointsLevel array.
 */
function setDifficulty() {

        document.getElementById('easy').addEventListener('click', function() {
            growthPoints = growthPointsLevel.easy;
            console.log("Easy level is" + growthPoints);
        });
    
        document.getElementById('medium').addEventListener('click', function() {
            growthPoints = growthPointsLevel.medium;
            console.log("Medium level is" + growthPoints);
        });
    
        document.getElementById('hard').addEventListener('click', function() {
            growthPoints = growthPointsLevel.hard;
            console.log("Hard level is" + growthPoints);
        });
    
      
        return growthPoints;
    }
    

/**
 * Calculates total score and day score. Day score will be reset, total points will not.
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
 * Checks if total points are equal or greater to any of the growth points defined and displays relevant plant image respectively.
 */
function growPlant(totalPoints) {
    
    let plantImage = document.getElementById('plant-image');
  

    // loop through array until end.
    for (let i=0; i < growthPoints.length -1; i++) {
        if (totalPoints >= growthPoints[8]) {
            endOfGame();
        } else if (totalPoints >= growthPoints[i])
            plantImage.innerHTML = `<img src="assets/images/${images[i]}" alt="seed-image">`; // Concatenates the path to the image file name
            console.log(plantImage);
            findNextGrowthPoint(totalPoints, i)
        }
        //     // } else if () { SORT so only triggers if reset() is called
        //     //     i=-1; continue;            
        //     // }  
}
    

     

/**
 * Finds the next integer in array and display to user.
 */
function findNextGrowthPoint(totalPoints , i) {

    let nextGrowthPoint = document.getElementById('next-growth-point');
    let nextInArray = growthPoints[i + 1];
    console.log(`next in array is ${nextInArray}`);
    
    nextGrowthPoint.innerHTML = nextInArray;
    untilNextGrowth(totalPoints, nextInArray);
}


/**Never-ending to-do lists and time crunches are exhausting. Focus on your three tasks, one at a time. You deserve to celebrate the little successes on the way to your big wins.
 * Finds the distance to the next growth points value from total points and displays to user.
*/
function untilNextGrowth(totalPoints, nextInArray) {

    let nextGrowthElement = document.getElementById('next-growth-in');
    nextGrowthElement.innerHTML = `(in ${(nextInArray - totalPoints)} points)`;
    
}


/**
 * New day resets the day score count, clears goals and unchecks all checkboxes.
 */
function newDay() {
    
    let newDayButton = document.getElementById('new-day');
    dayScoreElement = document.getElementById('today-points');
    dayScoreElement.innerHTML = 0;
    console.log("new day");
}


/**
 * Gets new reset time changed in settings by user.
 * Displays new reset time on the main page.
*/
document.getElementById('time-setting').addEventListener('change', function() {
    let resetTime = document.getElementById('set-time');
    let displayTime = document.getElementById('reset-time-main');
    displayTime.innerText = resetTime.value;
    console.log('goalResetTime running');
});   




/**
 *  Triggers new day button if user has not already triggered:
 */ 
function triggerGoalResetTime() {
    console.log('Reached triggerGoalResetTime');

}

/**
 * Once last growth point has been reached, plant is fully grown. Brings up new html page.
 */
    function endOfGame() {
        console.log('end of game running');
        window.location.href = "end.html";
    }

/**
 * Starts game from beginning: resets form inputs and returns all scores to 0.
 */
function resetGame() {
    document.getElementById('tasks-area').reset();
    document.getElementById('total-points').innerHTML = 0;
    document.getElementById('today-points').innerHTML = 0;
    document.getElementById('next-growth-in').innerHTML = "(in 6 points)";
    document.getElementById('next-growth-point').innerHTML = 6;
    console.log("Game reset");
    
}

/**
 * Gets new plant name from user in settings.html and sets innerText 
 * as name label in index.html  
 */
let plantName = document.getElementById('plant-name');
let nameTag = document.getElementById('nametag-for-plant');
document.getElementById('plant-name').addEventListener('change', function() {
    plantName.innerText = nameTag.innerText;
})
 
