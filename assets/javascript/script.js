
// Once document is loaded, hide spinner
    // $(document).ready(function(){
    //   $("#spinner").hide();
    // })

console.group();

// Wait for DOM to finish loading before running the game. Finds checkbox value.
document.addEventListener("DOMContentLoaded", function() {

    let checkboxes = document.getElementsByClassName("checkbox");

    for (let checkbox of checkboxes) {
        // set the checkboxes as disabled until the user adds to input
        checkbox.setAttribute('disabled', true);

        // If a checkbox is disabled, enable popovers on parent element
        if (checkbox.hasAttribute('disabled')) {
            checkbox.parentElement.setAttribute('data-bs-toggle', 'popover');
            checkbox.parentElement.setAttribute('data-bs-trigger', 'hover focus');
            checkbox.parentElement.setAttribute('data-bs-content', 'disabled popover');
        }

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskComplete(parseInt(checkbox.value));
                checkbox.parentElement.parentElement.parentElement.previousElementSibling.style.border = 'solid 2px green';
                checkbox.parentElement.parentElement.parentElement.previousElementSibling.style.textDecoration = 'line-through';
            } else {
                taskComplete(-checkbox.value);
                // to warn them that user ticked task and then left unchecked
                checkbox.parentElement.parentElement.parentElement.previousElementSibling.style.border = 'solid 2px gold';
                // restyles input text for readability
                checkbox.parentElement.parentElement.parentElement.previousElementSibling.style.textDecoration = 'none';
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
let images = ['seed0.jpg' , 'seed1.jpg', 'seed2.jpg' , 'seed3.jpg', 'seed4.jpg', 'seed5.jpg' , 'seed6.jpg', 'seed7.jpg'];
let growthPointsLevel = {

    easy: [1, 6, 9, 15, 19, 24, 30, 33, 36],
    medium: [3, 6, 9, 15, 18, 24, 30, 40, 52],
    hard: [6, 12, 18, 26, 33, 40, 50, randomArray1, randomArray2]

};
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

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
        plantImage.innerHTML = `<img src="assets/images/${images[i]}" alt="seed-image${i}" class="dragging" draggable="true">`; // Concatenates the path to the image file name
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
    // (change to event listeners for values of the html so always updated?)
}

/**
 * Feeds level of completion until next growth point 
 * as percentage to progress bar for user.
 */
function updateProgress(totalPoints, nextInArray) {
    progressPercentage = parseInt((totalPoints/nextInArray) * 100);
    let progressLog = document.getElementById('progress-log');
    progressLog.setAttribute('style', `width: ${progressPercentage}%`);
    progressLog.innerHTML = `${progressPercentage}%`;
}

/**
 * Resets day score count, clears goals inputs, unchecks all checkboxes, disables checkboxes until next user input.
 */
function newDay() {
    document.getElementById('today-points').innerHTML = 0;
    let inputs = document.getElementsByClassName('main-input');
    let checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(function(checkbox) {
        checkbox.setAttribute('disabled', true);        
    });

    // reset input styles
    for (let input of inputs) {
        input.style.border = 'solid 2px grey'; 
        input.style.textDecoration = 'none';
    }
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
        intervalID = setInterval(newDay, untilCustom);

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
            document.documentElement.setAttribute('--bs-body-color', '#fffce1');
            document.documentElement.setAttribute('--bs-text-color', '#3D3D3D');
            document.documentElement.setAttribute('--bs-emphasis-color', '#93B569');
            document.documentElement.setAttribute('--bs-secondary-color', '#2c2c2c');
            break;
        case 'dark':
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            document.documentElement.setAttribute('--bs-body-color', '#0e100f');
            document.documentElement.setAttribute('--bs-text-color', '#fffce1');
            document.documentElement.setAttribute('--bs-emphasis-color', '#93B569');
            document.documentElement.setAttribute('--bs-secondary-color', '#BDBDBD');
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

/**
 * Displays character count of task A input to user.
 * Disables checkbox if nothing is written in the input.
 */
document.getElementById('task-a').addEventListener('input', function() {
    let input = this.value;
    let count = document.getElementById('characters-a');
    let checkbox = document.getElementById('task-a-check');

    // Display character count
    count.style.display = 'block';
    count.innerHTML = `${input.length}/25 characters`;

    // Once goal inputted, checkbox becomes available
    checkbox.classList.remove('disabled');

    // Check input length conditions
     if (input.length <= 19) {
         count.style.color = 'green';
     } if (input.length >= 20) {
         count.style.color = 'red';
    } 
    
    // check for specific length conditions
    if (input.length === 25) {
        alert('Woah there hun, try to keep your goals as concise as possible! (25 characters or less)');
    } else if (input.length === 0) {
        // if input is empty, hide character count and disable checkbox
        count.style.display = 'none';
        checkbox.setAttribute('disabled', true);
        checkbox.classList.add('disabled');
    } else {
        checkbox.removeAttribute('disabled');
        checkbox.classList.remove('disabled');
    }
});

/**
 * Displays character count of task B input to user.
 */
document.getElementById('task-b').addEventListener('input', function() {
    let input = this.value;
    let count = document.getElementById('characters-b');
    let checkbox = document.getElementById('task-b-check');

    count.style.display = 'block';
    count.innerHTML = `${input.length}/25 characters`;

    // Once goal inputted, checkbox becomes available
    checkbox.classList.remove('disabled');

     if (input.length <= 19) {
         count.style.color = 'green';
     } if (input.length >= 20) {
         count.style.color = 'red';
    } 
    
    // check for specific length conditions
    if (input.length === 25) {
        alert('Woah there hun, try to keep your goals as concise as possible! (25 characters or less)');
    } else if (input.length === 0) {
        // if input is empty, hide character count and disable checkbox
        count.style.display = 'none';
        checkbox.setAttribute('disabled', true);
        checkbox.classList.add('disabled');
    } else {
        checkbox.removeAttribute('disabled');
        checkbox.classList.remove('disabled');
    }
});

/**
 * Displays character count of task C input to user.
 */
document.getElementById('task-c').addEventListener('input', function() {
    let input = this.value;
    let count = document.getElementById('characters-c');
    let checkbox = document.getElementById('task-c-check');

    count.style.display = 'block';
    count.innerHTML = `${input.length}/25 characters`;

    // Once goal inputted, checkbox becomes available
    checkbox.classList.remove('disabled');

     if (input.length <= 19) {
         count.style.color = 'green';
    } if (input.length >= 20) {
         count.style.color = 'red';
    } 
    
    // check for specific length conditions
    if (input.length === 25) {
        alert('Woah there hun, try to keep your goals as concise as possible! (25 characters or less)');
    } else if (input.length === 0) {
            // if input is empty, hide character count and disable checkbox
            count.style.display = 'none';
            checkbox.setAttribute('disabled', true);
            checkbox.classList.add('disabled');
    } else {
            checkbox.removeAttribute('disabled');
            checkbox.classList.remove('disabled');
    }
});

/**
 * 317 to 371: event handler for drag event on computer (source https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drag_event)
 */

let dragged;
/* events fired on the draggable target */
let source = document.getElementById("plant-image");

source.addEventListener("dragstart", (event) => {
console.log("dragging");
});

source.addEventListener("dragstart", (event) => {
// store a ref. on the dragged elem
dragged = event.target;
// make it half transparent
event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
// reset the transparency
event.target.classList.remove("dragging");
});

/* events fired on the drop targets */
let targets = document.getElementsByClassName("droptarget");

for (let target of targets) {
        target.addEventListener(
        "dragover", (event) => {
        // prevent default to allow drop
            event.preventDefault();
         }, false,
        );


        target.addEventListener("dragenter", (event) => {
        // highlight potential drop target when the draggable element enters it
        if (event.target.classList.contains("dropzone")) {
            event.target.classList.add("dragover");
        }
        });

        target.addEventListener("dragleave", (event) => {
        // reset styles of potential drop target when the draggable element leaves it
        if (event.target.classList.contains("dropzone")) {
            event.target.classList.remove("dragover");
        }
        });

        target.addEventListener("drop", (event) => {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged element to the selected drop target
        if (event.target.classList.contains("dropzone")) {
            event.target.classList.remove("dragover");
            event.target.appendChild(dragged);
        }
        });
    }



// PHONE

let draggedPhone;
/* events fired on the draggable target */
let sourcePhone = document.getElementById("draggable");
sourcePhone.addEventListener("touchstart", (event) => {
  console.log("dragging");
});

sourcePhone.addEventListener("touchstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");
});

function touchMove(e) {
    e.preventDefault();
    var currentX = e.touches[0].clientX - initialX;
    var currentY = e.touches[0].clientY - initialY;
  
    draggableElement.style.left = currentX + 'px';
    draggableElement.style.top = currentY + 'px';
  }

sourcePhone.addEventListener("touchend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});

/* events fired on the drop targets */
let targetPhone = document.getElementById("droptarget");
targetPhone.addEventListener(
  "touchmove",
  (event) => {
    // prevent default to allow drop
    event.preventDefault();
  },
  false,
);

targetPhone.addEventListener("dragenter", (event) => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

targetPhone.addEventListener("dragleave", (event) => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

targetPhone.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    event.target.appendChild(dragged);
  }
});