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
 * Triggers newDay() at time set (default set to 20:00)
 */
const defaultTimeSource = (document.getElementById('time-setting').value).split(':');
const defaultMilliseconds = (parseInt(defaultTimeSource[0])*60+parseInt(defaultTimeSource[1])*60000);
// let intervalID = setInterval(newDay, defaultMilliseconds); - unclear if this currently actually calls the function at the right time.

/**
 * Sets new intervalID for newDay() if trigger time is manually changed by user.
*/
document.getElementById('time-setting').addEventListener('change', function() {
    
    // reset the newDay interval
    clearInterval(intervalID);

    // get custom time value and parse to total minutes
    let customTime = this.value;
    let tValues = customTime.split(':');
    let customMinutes = parseInt(tValues[0])*60+parseInt(tValues[1]);
    let untilCustom = '';

    console.log('custom minutes is ' + customMinutes);

    // get current time and parse to integers (todayMinutes will have a max value of 1440)
    let d = new Date();
    let todayMinutes = parseInt((d.getHours()*60)) + parseInt(d.getMinutes());
    console.log('today\'s time in minutes is ' + todayMinutes);

    // find number of minutes until custom times, convert to milliseconds
    untilCustom = (customMinutes-todayMinutes)*60000;
    
    // if untilCustom is before current time, set for tomorrow
    if (untilCustom <= 0) {
        untilCustom = 86400000 + untilCustom;
    }

    console.log(`${untilCustom} milliseconds until custom time for function trigger`);

    // set interval ID for newDay function
    // intervalID = setInterval(newDay, untilCustom); - does this need to actually be stored in intervalID? The untilCustom values are reading correct.
    
});  

/**
 * Resets day score count, clears goals inputs, unchecks all checkboxes, disables checkboxes until next user input.
 */
function newDay() {
    // reset day's points
    document.getElementById('today-points').innerHTML = 0;

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
} 

/**
 * Once last growth point has been reached, plant is fully grown. Brings up new html page.
 */
    function endOfGame() {
        try {
            console.log('end of game running');
            window.location.href = "end.html";
        } catch (error) {
            console.log(error);
        }
    }

/**
 * BS light theme set to document if user clicks light mode button on index.html
 */
document.getElementById('btn-check-5').addEventListener('change', function() {
    console.log('checkbox clicked');

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
    const label = document.getElementById('label-a');
    const count = document.getElementById('characters-a');
    const checkbox = document.getElementById('task-a-check');
    
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

    const label = document.getElementById('label-b');
    const count = document.getElementById('characters-b');
    const checkbox = document.getElementById('task-b-check');

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
    let count = document.getElementById('characters-c');
    let checkbox = document.getElementById('task-c-check');

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

source.addEventListener("dragstart", (event) => {
    console.log("dragging");
    enableScroll();
    // store a ref. on the dragged elem
    dragged = event.target;
    console.log(`dragged event at ${dragged}`);
    // make it half transparent
    event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
    // reset the transparency
    console.log('dragging ended ln441');
    event.target.classList.remove("dragging");
});

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

for (let target of targets) {
    target.addEventListener("dragenter", (event) => {
        console.log('dragenter');
        // highlight potential drop target when the draggable element enters it
        if (event.target.classList.contains("dropzone")) {
            event.target.classList.add("dragover");
        }
    });
};

for (let target of targets) {
    target.addEventListener("dragleave", (event) => {
        console.log('dragleave event')
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

let draggedPhone;

/* events fired on the draggable target */
source.addEventListener("touchstart", (event) => {
    console.log("dragging");
    // disableScroll();
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.classList.add("dragging");
    }
    // , Modernizr.passiveeventlisteners ? {passive: true} : false
);

function touchMove(e) {
    e.preventDefault();
    // disableScroll();
    var currentX = e.touches[0].clientX - initialX;
    var currentY = e.touches[0].clientY - initialY;

    draggableElement.style.left = currentX + 'px';
    draggableElement.style.top = currentY + 'px';
}

source.addEventListener("touchend", (event) => {
    // reset the transparency
    event.target.classList.remove("dragging");
    // enableScroll();
});

/* events fired on the drop targets */
for (let target of targets) {
    target.addEventListener("touchmove", (event) => {
            // disableScroll();
            // prevent default to allow drop
            console.log('touchmove');
            // event.preventDefault();
        }, false,
    );
}

//https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// // modern Chrome requires { passive: false } when adding event
// var supportsPassive = false;
// try {
//   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
//     get: function () { supportsPassive = true; } 
//   }));
// } catch(e) {
//     console.log(e);
// }

// window.addEventListener('touchstart', fn,
//     detectIt.passiveEvents ? {passive:true} : false);
    

// // var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


// // call this to Disable
// function disableScroll() {
//   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
//   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
// }

// // call this to Enable
// function enableScroll() {
//     window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
//     window.removeEventListener('touchmove', preventDefault, wheelOpt);
//     window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
//   }