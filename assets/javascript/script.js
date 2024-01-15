// Wait for DOM to finish loading before running the game. Finds checkbox value.
document.addEventListener("DOMContentLoaded", function() {

     let checkboxes = document.querySelectorAll('.checkbox');
     checkboxes.forEach(function(checkbox) {
        checkbox.setAttribute('disabled', true);
    });

    for (let checkbox of checkboxes) {    
        let correspondingTextInput = document.getElementById(`task-${checkbox.id.slice(5,6)}`);
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskComplete(parseInt(checkbox.value));
                //  add styles
                checkbox.parentElement.parentElement.parentElement.previousElementSibling.style.border = 'solid 2px green';
                correspondingTextInput.style.textDecoration = 'line-through';
            } else {
                taskComplete(-checkbox.value);
                //  add styles
                checkbox.parentElement.parentElement.parentElement.previousElementSibling.style.border = 'solid 2px gold';
                correspondingTextInput.style.textDecoration = 'none';
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

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    try {
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        
    } catch (error) {
        console.log(error);
        // define backup values for entier array should settings fail
        growthPointsLevel.hard = [6, 12, 18, 26, 33, 40, 50, 62, 70];
    }
}

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
    return growthPoints;
});

/**
 * Sets growthPoints variable to relevant growthPointsLevel hard array.
 */
document.getElementById('btnradio3').addEventListener('click', function() {
    growthPoints = growthPointsLevel.hard;
    return growthPoints;
});

/**
 * Calculates total score and day score. Day score will be reset, total points will not.
*/
function taskComplete(value) {
    
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
 * Checks if total points are equal or greater to any of the growth points defined.
 * Displays relevant plant image respectively.
 */
function growPlant(totalPoints) {
    
    let plantImage = document.getElementById('plant-image');
  
    // loop through array until end.
    for (let i=0; i < growthPoints.length; i++) {
        if (totalPoints >= growthPoints[i]) {
        plantImage.innerHTML = `<img src="assets/images/${images[i]}" alt="seed-image${i}" class="dragging" draggable="true">`; // Concatenates the path to the image file name
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

    let nextGrowthPoint = document.getElementById('next-growth-point');
    let nextInArray = growthPoints[i + 1];;
    
    nextGrowthPoint.innerHTML = nextInArray;
    untilNextGrowth(totalPoints, nextInArray);
    updateProgress(totalPoints, nextInArray);
}

/**
 * Finds the distance to the next growth points value from total points and displays to user.
 */
function untilNextGrowth(totalPoints, nextInArray) {
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
 * Triggers newDay() at default time (default set to 20:00)
 */
const defaultTimeSource = (document.getElementById('time-setting').value).split(':');
// convert defaultTimeSource to total milliseconds
const defaultMilliseconds = (((parseInt(defaultTimeSource[0])*60)+parseInt(defaultTimeSource[1]))*60000);
//get current time in milliseconds
let d = new Date()
let todayMilliseconds = ((parseInt(d.getHours()*60))+(parseInt(d.getMinutes())))*60000;
let intervalLength = '';
let intervalID = '';

// check if current time is before or after default trigger time
// assign interval time accordingly
if (todayMilliseconds < defaultMilliseconds) {
    intervalLength = defaultMilliseconds - todayMilliseconds;
    console.log(`Reset time is in: ${intervalLength}`);
} else if (todayMilliseconds > defaultMilliseconds) {
    intervalLength = 86700000 - (todayMilliseconds-defaultMilliseconds);
    console.log(`Reset time is in: ${intervalLength}`);
}   

// trigger newDay() at intervalLength
intervalID = setInterval(() => newDay(), intervalLength);

/**
 * Sets new intervalID for newDay() if trigger time is manually changed by user.
*/
document.getElementById('time-setting').addEventListener('change', function() {
    
    // reset the newDay interval
    clearInterval(intervalID);

    // get custom time value and parse to total minutes
    let customTime = this.value;
    let tValues = customTime.split(':');
    let customMilliseconds = (parseInt(tValues[0])*60+parseInt(tValues[1]))*60000;


    // check if current time is before or after custom trigger time
    // assign interval time accordingly
    if (todayMilliseconds < customMilliseconds) {
        intervalLength = customMilliseconds - todayMilliseconds;
        console.log(`Reset time is in: ${intervalLength/60000} minutes`);
    } else if (todayMilliseconds > customMilliseconds) {
        intervalLength = 86700000 - (todayMilliseconds-customMilliseconds);
        console.log(`Reset time is in: ${intervalLength/60000} minutes`)
    }   

    // set interval ID for custom newDay function time
    intervalID = setInterval(() => newDay(), intervalLength);
    
});  

/**
 * Resets day score count, clears goals inputs, unchecks all checkboxes, disables checkboxes until next user input.
 */
function newDay(intervalID) {
    // reset day's points
    document.getElementById('today-points').innerHTML = 0;
    console.log('It is a new day!');

    // hide all character count
    let characters = document.getElementsByClassName('characters');
    for (let i = 0; i < characters.length; i++) {
         characters[i].style.display = 'none';
    }
    //  restyle inputs to default
    let mainInputs = document.getElementsByClassName('main-input');
    for (let i = 0; i < mainInputs.length; i++) {
        let tasks = mainInputs[i].querySelector('.task');
        tasks.style.textDecoration = 'none';
        tasks.style.border = 'solid 2px grey';
    }
    let checkboxes = document.querySelectorAll('.checkbox');
    for (let checkbox of checkboxes) {
        checkbox.setAttribute('disabled', true);
    };
    let labels =[document.querySelector('#label-a'), document.querySelector('#label-b'), document.querySelector('#label-c')];
    for (let label of labels) {
        label.classList.add('disabled');
    };
    // take user back to top of page
    document.getElementById('main-input-a').scrollIntoView();
    document.querySelector('form').reset();
}

// New Day user click confirmation text (fade in and out)
document.getElementById('new-day').addEventListener('click', function() {
    console.log('new-day-clicked');
    let newDayText = document.getElementById('new-day-text');
    // Fade in
    setTimeout(function() {
        newDayText.style.opacity = '1';
        }, 0);
    
        // Fade out after 2 seconds
        setTimeout(function() {
        newDayText.style.opacity = '0';
        }, 2000);
});

/**
 * Once last growth point has been reached, plant is fully grown. Brings up new html page.
 */
    function endOfGame() {
        try {
            console.log('end of game running');
            window.location.href = "end.html";
            // stop newDay function being called
            intervalID = null;
        } catch (error) {
            console.log(error);
        }
    }

/**
 * BS light theme set to document if user clicks light mode button on index.html
 */
document.getElementById('btn-check-5').addEventListener('change', function() {

    let colorCheckbox = document.getElementById("btn-check-5");
    let theme = colorCheckbox.checked ? 'light' : 'dark';

    console.log('currently theme is: ' + theme);

    try {
        switch (theme) {
            case 'light':
                document.documentElement.setAttribute('data-bs-theme', 'light');
                document.documentElement.style.setProperty('--bs-body-bg', '#fffce1');
                document.documentElement.style.setProperty('--bs-body-color', '#3D3D3D');
                document.documentElement.style.setProperty('--bs-emphasis-color', '#93B569');
                document.documentElement.style.setProperty('--bs-secondary-color', '#2c2c2c');
                break;
            case 'dark':
                document.documentElement.setAttribute('data-bs-theme', 'dark');
                document.documentElement.style.setProperty('--bs-body-bg', '#0e100f');
                document.documentElement.style.setProperty('--bs-body-color', '#fffce1');
                document.documentElement.style.setProperty('--bs-emphasis-color', '#93B569');
                document.documentElement.style.setProperty('--bs-secondary-color', '#BDBDBD');
                break;
        }        
    } catch (error) {
     console.log(error);   
    }
});

/**
 * Blurs the rest of the body when the 
 * reset game popover is triggered to appear.
 */
document.getElementById('reset-game').addEventListener('click', function(event) {
    
    const popoverMessage = document.getElementById('popover-message');
    const options = document.getElementById('staticBackdrop');
   
    try {
        // prompts user to pick an option
        setTimeout(() => {
            popoverMessage.innerText = 'please choose an option';
        }, 10000);
    } catch (error) {
        console.log(`Error is: ${error}`);
        alert('Something went wrong, please try again');
        options.hidePopover;
    }

});

// If reset is cancelled, body returns to normal opacity for visibility.
document.getElementById('reset-confirmed').addEventListener('click', function() {
    window.location.href="index.html";

});


/**
 * Displays character count of task A input to user.
 * Disables checkbox if nothing is written in the input.
 */
document.getElementById('task-a').addEventListener('input', function() {
    let input = this.value;
    var label = document.getElementById('label-a');
    var count = document.getElementById('characters-a');
    var checkbox = document.getElementById('task-a-check');
    
    // Once goal inputted, checkbox becomes available
    checkbox.disabled = false;
    
    // Format character count
    count.style.display = 'block';
    count.innerHTML = `${input.length}/25 characters`;

    // Check input length conditions
    // Style character count depending on length
     if (input.length <= 19) {
        count.style.display = 'block';
        count.style.fontSize = '15px';
        count.style.color = 'green';
        count.style.background = 'none';
        // show done checkbox as active
        label.classList.remove('disabled');
    } if (input.length >= 20) {
        count.style.background = 'none';
        count.style.color = 'red';
    } if (input.length === 25) {
        count.style.color = 'black';
        count.style.backgroundColor = 'yellow';
        count.innerHTML = 'Hold your horses hun, try to keep your goals as concise as possible! (25 characters or less)';
    } else if (input.length === 0) {
        // if input is empty, hide character count and disable checkbox
        count.style.display = 'none';
        checkbox.setAttribute('disabled', true); 
        this.placeholder = 'Enter a goal before clicking \'Done\'';  
        label.classList.add('disabled');
    }
});

/**
 * Displays character count of task B input to user.
 */
document.getElementById('task-b').addEventListener('input', function() {
    let input = this.value;

    var label = document.getElementById('label-b');
    var count = document.getElementById('characters-b');
    var checkbox = document.getElementById('task-b-check');

    count.style.display = 'block';
    count.innerHTML = `${input.length}/25 characters`;

    // Once goal inputted, checkbox becomes available
    checkbox.disabled = false;

    // Check input length conditions
    // Style character count depending on length
    if (input.length <= 19) {
        count.style.display = 'block';
        count.style.fontSize = '15px';
        count.style.color = 'green';
        count.style.background = 'none';
        // show done checkbox as active
        label.classList.remove('disabled');
    } if (input.length >= 20) {
        count.style.background = 'none';
        count.style.color = 'red';
    } if (input.length === 25) {
        count.style.color = 'black';
        count.style.backgroundColor = 'yellow';
        count.innerHTML = 'Hold your horses hun, try to keep your goals as concise as possible! (25 characters or less)';
    } else if (input.length === 0) {
        // if input is empty, hide character count and disable checkbox
        count.style.display = 'none';
        checkbox.setAttribute('disabled', true); 
        this.placeholder = 'Enter a goal before clicking \'Done\'';  
        label.classList.add('disabled');
    }
});

/**
 * Displays character count of task C input to user.
 */
document.getElementById('task-c').addEventListener('input', function() {
    let input = this.value;
    var count = document.getElementById('characters-c');
    var checkbox = document.getElementById('task-c-check');
    var label = document.getElementById('label-c');

    count.style.display = 'block';
    count.innerHTML = `${input.length}/25 characters`;

    // Once goal inputted, checkbox becomes available
    checkbox.disabled = false;

    // Check input length conditions
    // Style character count depending on length
    if (input.length <= 19) {
        count.style.display = 'block';
        count.style.fontSize = '15px';
        count.style.color = 'green';
        count.style.background = 'none';
        // show done checkbox as active
        label.classList.remove('disabled');
    } if (input.length >= 20) {
        count.style.background = 'none';
        count.style.color = 'red';
    } if (input.length === 25) {
        count.style.color = 'black';
        count.style.backgroundColor = 'yellow';
        count.innerHTML = 'Hold your horses hun, try to keep your goals as concise as possible! (25 characters or less)';
    } else if (input.length === 0) {
        // if input is empty, hide character count and disable checkbox
        count.style.display = 'none';
        checkbox.setAttribute('disabled', true); 
        this.placeholder = 'Enter a goal before clicking \'Done\'';  
        label.classList.add('disabled');
    }
});

//Drag event handling (with mouse)
// Source https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drag_event
let dragged;
/* events fired on the draggable target */
var source = document.getElementById("plant-image");
// Works
source.addEventListener("dragstart", (event) => {
    console.log("dragging");
    // store a ref. on the dragged elem
    dragged = event.target;
    console.log(`dragged event at ${dragged}`);
    // make it half transparent
    event.target.classList.add("dragging");
});
// Works
source.addEventListener("dragend", (event) => {
    // reset the transparency
    console.log('dragging ended');
    event.target.classList.remove("dragging");
    event.target.appendChild(dragged);
});
// Works
/* events fired on the drop targets */
let targets = document.getElementsByClassName("droptarget");
for (let target of targets) {
    target.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        console.log('dragover');
        event.preventDefault();
    }, false,
    );
}
// Works
for (let target of targets) {
    target.addEventListener("dragenter", (event) => {
        console.log('dragenter');
        event.preventDefault();
        // highlight potential drop target when the draggable element enters it
        if (event.target.classList.contains("dropzone")) {
            event.target.classList.add("dragover");
        }
    });
};
// Works
for (let target of targets) {
    target.addEventListener("dragleave", (event) => {
        console.log('dragleave event')
        event.preventDefault();
        // reset styles of potential drop target when the draggable element leaves it
        if (event.target.classList.contains("dropzone")) {
            event.target.classList.remove("dragover");
        }
    });
}

for (let target of targets) {
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

//Drag event handling (with touch/phone)
// Source https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drag_event
/* events fired on the draggable target */
source.addEventListener("onpointerdown", (event) => {
    console.log("dragging");
    // stop the scoll behaviour
    event.preventDefault();
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.classList.add("dragging");
    }
);

function touchMove(event) {
    event.preventDefault();
    // disableScroll();
    var currentX = e.touches[0].clientX - initialX;
    var currentY = e.touches[0].clientY - initialY;

    draggableElement.style.left = currentX + 'px';
    draggableElement.style.top = currentY + 'px';
}

/* events fired on the drop targets */
for (let target of targets) {
    target.addEventListener("touchmove", (event) => {
            console.log('touchmove');
            // prevent default to allow drop
            event.preventDefault();
        }, false,
    );
}

source.addEventListener("touchend", (event) => {
    event.preventDefault();
    // reset the transparency
    event.target.classList.remove("dragging");
    // enableScroll();
    if (event.target.classList.includes('droptarget')) {
        event.target.appendChild(dragged);
    }
});

/**
 * Move image from main area into next available gallery div
 */
function moveImageToFirstEmptyDiv() {
    // Get the current image element within the span
    const currentImage = document.querySelector('#plant-image img');
    // Get all div elements within the gallery area
    const divElements = document.querySelectorAll('.gallery');
    // Find the first empty div element
    const firstEmptyDiv = Array.from(divElements).find(div => div.childElementCount === 0);
    // If there is a current image and an empty div, move the image
    try {
        if (currentImage && firstEmptyDiv) {
            // Remove the image from the span
            document.querySelector('#plant-image').removeChild(currentImage);
            // Append the image to the first empty div
            firstEmptyDiv.appendChild(currentImage);
        }    
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}