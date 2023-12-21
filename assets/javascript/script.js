
// Once document is loaded, hide spinner
    // $(document).ready(function(){
    //   $("#spinner").hide();
    // })


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
  

// global variable
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
 * Automatically sets difficulty to medium. User can change if desired.
 */
document.addEventListener('DOMContentLoaded', function() {
    growthPoints = growthPointsLevel.medium;
});

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

    console.log('total points are' + totalPoints)
    growPlant(totalPoints);

    
}


/**
 * Checks if total points are equal or greater to any of the growth points defined.
 * Displays relevant plant image respectively.
 */
function growPlant(totalPoints) {
    
    let plantImage = document.getElementById('plant-image');
  
    console.log('growPlant invoked, totalPoints : ', totalPoints);
    // loop through array until end.
    for (let i=0; i < growthPoints.length; i++) {
        if (totalPoints >= growthPoints[i]) {
        console.log('i is ' + i);
        console.log('growthPoints[i] :', growthPoints[i]);
        console.log('totalPoints : ', totalPoints);
        console.log('growthPoints.length :', growthPoints.length);
        console.log('growthPoints[8] :', growthPoints[8]);
        console.log(growthPoints);
        console.log(i);
        plantImage.innerHTML = `<img src="/assets/images/${images[i]}" alt="seed-image">`; // Concatenates the path to the image file name
        console.log(plantImage);
        findNextGrowthPoint(totalPoints, i);
        } if (totalPoints >= growthPoints[8]) {
            console.log('end of array, now to end of game');
            endOfGame();
        }
    } 
}
     

/**
 * Finds the next integer in array and display to user.
 */
function findNextGrowthPoint(totalPoints, i) {

    console.log('findNextGrowthPoint invoked', totalPoints, i);

    let nextGrowthPoint = document.getElementById('next-growth-point');
    let nextInArray = growthPoints[i + 1];
    console.log(`next in array is ${nextInArray}`);
    
    nextGrowthPoint.innerHTML = nextInArray;
    untilNextGrowth(totalPoints, nextInArray);
    updateProgress(totalPoints, nextInArray);
}


/**
 * Finds the distance to the next growth points value from total points and displays to user.
 */
function untilNextGrowth(totalPoints, nextInArray) {
    console.log('untilNextGrowth reached!');
    let nextGrowthElement = document.getElementById('next-growth-in');
    nextGrowthElement.innerHTML = `(in ${(nextInArray - totalPoints)} points)`;

}

// TODO
function updateProgress(totalPoints, nextInArray) {
    progressPercentage = parseInt(nextInArray/totalPoints);
    document.querySelector('.progress-bar[style]').innerHTML = `width: ${progressPercentage}%`;
}

// $("input[placeholder]").each( function () {
//     $(this).val( $(this).attr("placeholder") );
// });

/**
 * On button click, new day resets the day score count, clears goals and unchecks all checkboxes.
 */
function newDay() {
    document.getElementById('today-points').innerHTML = 0;
    console.log("new day");
}


/**
 * Triggers new day button at custom time set by user.
*/
document.getElementById('time-setting').addEventListener('change', function() {
    
    // get custom time value and parse to total minutes
    let customTime = this.value;
    let tValues = customTime.split(':');
    let customMinutes = parseInt(tValues[0])*60+parseInt(tValues[1]);
    console.log('custom minutes is ' + customMinutes);

    // get current time and parse to integers (todayMinutes will have a max value of 1440)
    let d = new Date();
    let todayMinutes = parseInt((d.getHours()*60)) + parseInt(d.getMinutes());
    console.log('today minutes is ' + todayMinutes);

    // if custom time later than current time, trigger new day function for same day
    if (todayMinutes < customMinutes) {
        // find number of minutes until custom times, convert to milliseconds
        let untilCustom = ((customMinutes-todayMinutes)*60)*100;
        setNewDayTrigger(untilCustom);
    } 

    let intervalID = '';
    function setNewDayTrigger(untilCustom) {
        intervalID = setInterval(newDay(), untilCustom);

    }

}); 

/**
 * Once last growth point has been reached, plant is fully grown. Brings up new html page.
 */
    function endOfGame() {
        console.log('end of game running');
        window.location.href = "end.html";
    }


/**
 * TODO
 * Invert colors for dark mode?
 */
//  function colourFunction() {
//     let colorToggle = document.getElementById('btn-check-5'); 
//     let colours =[['e4dfda','ffffff'],['00FFFF','008000']]; 
//     for(var i=0; i< 2; i++) {
//         if (colorToggle.checked) {
//         document.body.style.backgroundColor= '#'+ colours[i][0];
//         document.body.style.color= '#'+ colours[i][1];
//         return true;
//         } 
//     }
//  }


    
