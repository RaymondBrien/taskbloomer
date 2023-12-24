
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
 * Automatically sets difficulty to medium. User can change if desired.
 */
document.addEventListener('DOMContentLoaded', function() {
    growthPoints = growthPointsLevel.medium;
    console.log('difficulty level default initiated (medium): ' + growthPoints);
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
 * Sets growthPoints variable to relevant growthPointsLevel easy array.
 */
document.getElementById('btnradio1').addEventListener('click', function() {
    growthPoints = growthPointsLevel.easy;
    console.log("Easy level is" + growthPoints);
    return growthPoints;
});

/**
 * Sets growthPoints variable to relevant growthPointsLevel medium array.
 */
document.getElementById('btnradio2').addEventListener('click', function() {
    growthPoints = growthPointsLevel.medium;
    console.log("Medium level is" + growthPoints);
    return growthPoints;
});

/**
 * Sets growthPoints variable to relevant growthPointsLevel hard array.
 */
document.getElementById('btnradio3').addEventListener('click', function() {
    growthPoints = growthPointsLevel.hard;
    console.log("Hard level is" + growthPoints);
    return growthPoints;
});

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
        plantImage.innerHTML = `<img src="/assets/images/${images[i]}" alt="seed-image">`; // Concatenates the path to the image file name
        console.log(plantImage);
        findNextGrowthPoint(totalPoints, i);
        } if (totalPoints >= growthPoints[8]) {
            console.log('end of array, triggering endOfGame()');
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
    console.log('triggering updateProgress function');
    updateProgress(totalPoints, nextInArray);

}


/**
 * Finds the distance to the next growth points value from total points and displays to user.
 */
function untilNextGrowth(totalPoints, nextInArray) {
    console.log('untilNextGrowth reached!');
    let nextGrowth = document.getElementById('next-growth-in');
    nextGrowth.innerHTML = `(in ${(nextInArray - totalPoints)} points)`;

}

/**
 * Feeds level of completion until next growth point 
 * as percentage to progress bar for user.
 */
function updateProgress(totalPoints, nextInArray) {
    console.log('update progress reached with two values: ' + totalPoints + ' and ' + nextInArray);
    progressPercentage = parseInt((totalPoints/nextInArray) * 100);
    let progressLog = document.getElementById('progress-log');
    progressLog.setAttribute('style', `width: ${progressPercentage}%`);
    progressLog.innerHTML = `${progressPercentage}%`;
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
 * BS light theme set to document if user clicks light mode button on index.html
 */
document.getElementById('btn-check-5').addEventListener('change', function() {
    console.log('checkbox clicked');

    let colorCheckbox = document.getElementById("btn-check-5");
    let theme = colorCheckbox.checked ? 'light' : 'dark';

    console.log('currently theme is: ' + theme);

    switch (theme) {
        case 'light':
            document.documentElement.setAttribute('data-bs-theme', 'light');
            break;
        case 'dark':
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            break;
    }
});



/**
 * Blurs the rest of the body when the 
 * reset game popover is triggered to appear.
 */
document.getElementById('reset-game').addEventListener('click', function() {
    console.log('blurring body!');
    document.body.style.opacity = 0.15;
});

/**
 * If reset is cancelled, body returns to normal opacity for visibility.
 */
document.getElementById('reset-cancelled').addEventListener('click', function() {
    console.log('resetting body to normal!');
    document.body.style.opacity = 1;
});