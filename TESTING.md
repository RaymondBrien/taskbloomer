# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files, using the live deployed site pages from GitHub Page, validating via URI.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fraymondbrien.github.io%2Ftaskbloomer%2F) | ![screenshot](documentation/screenshots/testing/html-validation-home.png) | Pass: no errors or warnings |
| Game | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fraymondbrien.github.io%2Ftaskbloomer%2Fgame.html) | ![screenshot](documentation/screenshots/testing/html-validation-game.png)| Heading warning for section element. No changes required. |
| End | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2FRaymondBrien.github.io%2Ftaskbloomer%2Fquiz.html) | ![screenshot](documentation/screenshots/testing/html-validation-end.png) | Pass: no errors or warnings |
|

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | n/a| ![screenshot](documentation/screenshots/testing/css-validation-style.png) | Pass: No Errors |
| end.css | n/a | ![screenshot](documentation/screenshots/testing/css-validation-end.png) | Pass: No Errors |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/screenshots/testing/js-validation-script.png) | Warning about global variables |


## Browser Compatibility

The browsers I have used to test with are:
- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Safari](https://support.apple.com/downloads/safari)
- [Opera](https://www.opera.com/download)

I've tested my deployed project on the browsers listed to check for compatibility issues. No major issues were found.

| Browser | Home                                             | Game                                             | End                                             | Notes                  |
| ------- | ------------------------------------------------ | ------------------------------------------------- | ----------------------------------------------- | ---------------------- |
| Chrome  | ![screenshot](documentation/screenshots/testing/browser-chrome-home.png) | ![screenshot](documentation/screenshots/testing/browser-chrome-game.png) | ![screenshot](documentation/screenshots/testing/browser-chrome-end.png) | Works as expected      |
| Firefox | ![screenshot](documentation/screenshots/testing/browser-firefox-home.png) | ![screenshot](documentation/screenshots/testing/browser-firefox-game.png) | ![screenshot](documentation/screenshots/testing/browser-firefox-end.png) | Works as expected      |
| Safari  | ![screenshot](documentation/screenshots/testing/browser-safari-home.png) | ![screenshot](documentation/screenshots/testing/browser-safari-game.png) | ![screenshot](documentation/screenshots/testing/browser-safari-end.png) | Works as expected  |
| Opera   | ![screenshot](documentation/screenshots/testing/browser-opera-home.png) | ![screenshot](documentation/screenshots/testing/browser-opera-game.png) | ![screenshot](documentation/screenshots/testing/browser-opera-end.png) | Minor differences, but works as expected     |


## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues, functionality, touch/click events and formatting for different screen sizes.

| Device | Home | Game | End | Notes |
| --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/screenshots/testing/responsive-mobile-home.png) | ![screenshot](documentation/screenshots/testing/responsive-mobile-game.png) | ![screenshot](documentation/screenshots/testing/responsive-mobile-end.png) | Game touch-drag issues for image lead to the implementation of the 'Move Image to Gallery' button which solves this issue and actually creates an improved user experience and more satisfying UI. All other touch events work fully as expected. |
| Tablet (Real iPad 12.9" Device Used) | ![screenshot](documentation/screenshots/testing/responsive-tablet-home.png) | ![screenshot](documentation/screenshots/testing/responsive-tablet-game.png) | ![screenshot](documentation/screenshots/testing/responsive-tablet-end.png) | Works as expected. Touch-drag issues less prominent, if user were to drag the image into the gallery. However, as with the phone documentation, the 'Move Image to Gallery' button solves this issue and greatly improves the UI and UX for desktop and touch-enabled devices alike. All other touch events work fully as expected. |
| Desktop | ![screenshot](documentation/screenshots/testing/responsive-desktop-home.png) | ![screenshot](documentation/screenshots/testing/responsive-desktop-game.png) | ![screenshot](documentation/screenshots/testing/responsive-desktop-end.png) | Works as expected |
| iPhone 11 (Real Device Used) | ![screenshot](documentation/screenshots/testing/responsive-iphone-home.png) | ![screenshot](documentation/screenshots/testing/responsive-iphone-game.png) | ![screenshot](documentation/screenshots/testing/responsive-iphone-end.png) | Works as expected, minor image sizing issues |


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page  | Mobile | Desktop | Notes                               |
| ----- | ------ | ---- | ----------------------------------- |
| Home  | ![screenshot](documentation/screenshots/testing/lighthouse-home-mobile.png) | ![screenshot](documentation/screenshots/testing/lighthouse-home-desktop.png) | Slower response time than expected due to large hero logo. Can be easily fixed for v2.0 |
| Game | ![screenshot](documentation/screenshots/testing/lighthouse-game-mobile.png) | ![screenshot](documentation/screenshots/testing/lighthouse-game-desktop.png) | Some minor warnings for mobile only |
| End   | ![screenshot](documentation/screenshots/testing/lighthouse-end-mobile.png) | ![screenshot](documentation/screenshots/testing/lighthouse-end-desktop.png) | Minor issues for response time due to large images. Can be easily fixed for v2.0. SEO score can be improved with meta descriptions being improved.|

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

## Home

### task page button (nav)

- **Expectation**: Link to game page with mouse hover / click animation
- **Test**: Clicked and tapped for 3 tests
- **Result**: Test concluded and passed
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/feature01.jpeg)

### task page button (page)

- **Expectation**: Link to game page with mouse hover / click animation
- **Test**: Clicked and tapped for 3 tests
- **Result**: Test concluded and passed
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/feature01.jpeg)

### accordion

- **Expectation**: accordion tabs open and close correctly
- **Test**: Open and close 3 times
- **Result**: Test concluded and passed
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/feature03.jpeg)

### Game

### name logo

- **Expectation**: links back to home page
- **Test**: Tried 3 times
- **Result**: Test concluded and passed
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-1.png)

### navbar toggle

- **Expectation**: opens and closes with smooth animation to display settings area
- **Test**: Opens 5 times.
- **Result**: Works as expected - if viewport width is abnormally large (1573px or wider) the toggle button is shifted to right. No functionality affected
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-1.png)

### Settings Easy/Medium/Hard

- **Expectation**: Changes difficulty level and displays which level has been chosen by the user. Default option shown as selected on load is medium
- **Test**: Reloaded page 3 times, each time, medium was automatically selected, logged in the consol. Everything was running as expected when trying the easy or hard modes.
- **Result**: All modes work as expected. Progress bar is dynamically changed depending on which mode is used and how much progress is currently logged
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/feature05.jpeg)

### Light Mode

- **Expectation**: Toggles page theme with custom css color variables. Visibility throughout the site should still be maintained for all elements including links
- **Test**: Turned off and on 3 times, checking each time for different visibility issues.
- **Result**: All elements are changed as expected, all links and colored elements remain fully visible.
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/feature05.jpeg)

### Reset custom time

- **Expectation**: Custom link time should toggle the newDay button automatically at the user's selected time. On first page load, this should default to 8pm; changes to this time will log how long until the function triggers in the console, based on the user's local time
- **Test**: Checked by changing the reset time to one minute later than current time. 
- **Result**: Works as expected
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/feature06.jpeg)

### Instructions link in settings area

- **Expectation**: Should redirect to index page 
- **Test**: Tried 4 times
- **Result**: Hover animation works and redirects to home page as expected. 
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-1.png)

### task checkboxes

- **Expectation**: Checkboxes should remain diabled until goals are written in the input boxes, reset to disabled at each New Day
- **Test**: Tested on each task checkbox 3 times, two after NewDay was triggered
- **Result**: Test concluded and passed. Checkboxes are always disabled if there is no text and done is not clicked. You cannot click the 3 points checkbox more than once per day, as intended.
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-9.png)

### New Day

- **Expectation**: Shows user confirmation with text appearing logging the new day, sets the day's point collection to zero without affecting the total score. Checkboxes should be disabled and the first input box should be scrolled into view after 3 seconds.
- **Test**: Tested each input box to try and cheat - before and after new day button is clicked, even with nothing written in input boxes
- **Result**: Each new day button click works as expected, clearing the form, disabling checkboxes, providing user confirmation of click and scrolling the first task box into view after 3 seconds. 
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-10.png)

### Input box

- **Expectation**: Character limit shown - max limit shows text if maximum character limit of 25 characters reached. If goal is deleted, the input box is highlighted yellow and changes placeholder text, disabling checkbox until a new goal is written inside. Styles of the text should pertain only to the relevant values
- **Test**: Tried to cheat 4 times on each checkbox.
- **Result**: Works as expected
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-11.png)

### Drag image functionality

- **Expectation**: Users can drag the large NFT image into the gallery, which will highlight the draggable area when near or just over it as a drop target - on drop the image will be appended as a child of the container (frame) element
- **Test**: Tried on multiple devices
- **Result**: Cannot drag image to append itself to a new frame in the gallery once it has been assigned its frame in the gallery but I consider this to be a good solution to what would otherwise be a chaotic solution of assigning each image only to a specific box which would need a large amount of user guidance text for which there is no real estate available within that section without overcrowding the page
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-3.png)

### Game reset button

- **Expectation**: Should open a modal that you cannot click off but clicking outside the modal box - only the close button will close the modal
- **Test**: Tried three times during game and two on new page loads
- **Result**: works as expected
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-4.png)

### Game reset popover YES

- **Expectation**: Redirect user back to index.html page and reset entire game. It was preferred to take users back to home page to always allow the users to check the instructions again before using - this was found to be useful in early development for new users to remind them how the game works
- **Test**: Tried three times during game and two on new page loads
- **Result**: works as expected
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-4.png)

### Game reset popover NO

- **Expectation**: Closes popover with no affect to the game, reestablishes opacity of body for page visibility to continue use as expected
- **Test**: Opened and closed whilst also trying to overload the page with the settings and stats tabs open.
- **Result**: Works as expected, always loads the modal above all other elements and is not dismissable unless the close button is clicked. If user clicks outside the modal body, an animation directing focus to the modal box plays as expected, via bootstrap js.
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-4.png)

### Stats toggle

- **Expectation**: Should open and close with relevant information displayed and updated dynamically via script.js for progress bar, and stats table. Links to
- **Test**: Open and close at 3 different times during using the app after 1, 2 and 3 new days were logged via clicking the new day button
- **Result**: Works as expected
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-5.png)

### Stats toggle links

- **Expectation**: Links in the links section at the bottom of the stats section and as hyperlinks in text area within developer description. Links are to github repo and developer github profile and developer linkedIn.
- **Test**: Clicked on links 3 times each
- **Result**: Link always opens in new tab and lands on each page as expected without affecting the game page. Each has the hover animation for text links as expected for UI.
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-6.png)

### Instructions link in footer

- **Expectation**: Href back to index.html; should scroll instructions accordion immediately into view. Github link should send user to github repo for the project
- **Test**: Clicked 3 times
- **Result**: Works as expected 
- **Fix**: n/a
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-7.png)

## End

### Back to Start Page button

- **Expectation**: Returns the user back to the home page where the game can be started again. Progress should not remain within the game cache.
- **Test**: Tested 3 times
- **Result**: Works as expected. Button could be more visible due to padding issue.
- **Fix**: Reduce padding top for body element on end.html to make the home button more discoverable.
- **Screenshot**: ![screenshot](documentation/screenshots/testing/testing-8.png)


## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to set goals, so that I can feel more in control of my to-do list for the day. | ![screenshot](documentation/screenshots/feature15.png) |
| As a new site user, I would like to reduce overwhelm, so that I can feel more productive during my day. | ![screenshot](documentation/screenshots/feature21.png) |
| As a new site user, I would like to see clean visuals, so that I don't feel overwhelmed with information. | ![screenshot](documentation/screenshots/feature03.jpeg) |
| As a new site user I would like to learn how to use the site, so that I can make the most of the application. | ![screenshot](documentation/screenshots/feature01.jpeg) |
| As a new site user, I would like to track my to-dos, so that I can feel productive. | ![screenshot](documentation/screenshots/feature10.png) |
| As a returning site user, I would like to track my progress, so that I can to remain motivated and engaged with my tasks. | ![screenshot](documentation/screenshots/feature08.jpeg) |
| As a returning site user, I would like to make sure that if any tasks have been accidentally marked uncomplete, I can see that has happened   fix it, to make sure I earn all my points for the day. | ![screenshot](documentation/screenshots/feature14.png) |
| As a returning site user, I would like to have my tasks clear automatically, so that I can avoid unneccessary extra menial tasks. | ![screenshot](documentation/screenshots/feature15.png) |
| As a returning site user, I would like to be able to switch the colorscheme, so that I can improve the accessibility of my tasks area. | ![screenshot](documentation/screenshots/feature05.jpeg) |


## Bugs

- Added non-passive event listener to a scroll-blocking 'touchmove' event.

    ![screenshot](documentation/screenshots/testing/bug01.jpeg)

    - To fix this, I implemented a new method (see script.js line 588) which automatically assigns the image to an available container within the gallery. This not only improved the user experience, as there was limited real estate with the larger photos on mobile devices anyways, but also created a cleaner solution to the problem, rather than having to ensure for chrome there was extra javascript listing event listeners as passive explicitly, due to their scroll API requirements. 

## Unfixed Bugs

<!-- You will need to mention unfixed bugs and why they were not fixed.
This section should include shortcomings of the frameworks or technologies used.
Although time can be a big variable to consider, paucity of time and difficulty understanding
implementation is not a valid reason to leave bugs unfixed.

If you've identified any unfixed bugs, no matter how small, be sure to list them here.
It's better to be honest and list them, because if it's not documented and an assessor finds the issue,
they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them. -->

- On devices larger than 1550px wide, the page starts to have `overflow-x` scrolling or blocking clickable items in the top right of the screen.

    ![screenshot](documentation/screenshots/testing/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- End carousel images resizes larger when animating to the next slide very briefly before returning to standard size.
    
    ![screenshot](documentation/screenshots/testing/unfixed-bug02.png)

    - Attempted fix: I tried to change the photo sizes, positioning and padding in case this was causing issues with the transitions. These did not make a difference, nor did changing the css for the carousel container elements by overriding the variables from BS for the containers. 
    I believe this is a Bootstrap issue.

