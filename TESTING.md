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

If using modern JavaScript (ES6) methods, then make sure to include the following
line at the very top of every single JavaScript file (this should remain in your files for submission):

    /* jshint esversion: 11 */

If you are also including jQuery (`$`), then the updated format will be:

    /* jshint esversion: 11, jquery: true */

This allows the JShint validator to recognize modern ES6 methods, such as:
`let`, `const`, `template literals`, `arrow functions (=>)`, etc.

<!-- **IMPORTANT**: External resources

Sometimes we'll write JavaScript that imports variables from other files, such as an array of questions
from `questions.js`, which are used within the main `script.js` file elsewhere.
If that's the case, the JShint validation tool doesn't know how to recognize unused variables
that would normally be imported locally in your code.
These warnings are acceptable to showcase on your screenshots.

The same thing applies when using external libraries such as Stripe, Leaflet, Bootstrap, Materialize, etc..
To instantiate these components, we need to use their respective declarator.
Again, the JShint validation tool would flag these as undefined/unused variables.
These warnings are acceptable to showcase on your screenshots.

Sample JS code validation documentation (tables are extremely helpful!): -->


| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/js-validation-script.png) | Unused variables from external files |
| questions.js | ![screenshot](documentation/js-validation-questions.png) | Pass: No Errors |
| quiz.js | ![screenshot](documentation/js-validation-quiz.png) | Unused variables from external files |
| stripe_elements.js | ![screenshot](documentation/js-validation-stripe.png) | Undefined Stripe variable |
| x | x | x | repeat for all remaining JavaScript files |

## Browser Compatibility

<!-- Use this space to discuss testing the live/deployed site on various browsers.

Consider testing at least 3 different browsers, if available on your system. -->

Recommended browsers to consider:
- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Edge](https://www.microsoft.com/edge)
- [Safari](https://support.apple.com/downloads/safari)
- [Brave](https://brave.com/download)
- [Opera](https://www.opera.com/download)

<!-- **IMPORTANT**: You must provide screenshots of the tested browsers, to "prove" that you've actually tested them.

Please note, there are services out there that can test multiple browser compatibilities at the same time.
Some of these are paid services, but some are free.
If you use these, you must provide a link to the source used for attribution, and multiple screenshots of the results. -->

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | About | Contact | etc | Notes |
| --- | --- | --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/browser-chrome-home.png) | ![screenshot](documentation/browser-chrome-about.png) | ![screenshot](documentation/browser-chrome-contact.png) | ![screenshot](documentation/browser-chrome-etc.png) | Works as expected |
| Firefox | ![screenshot](documentation/browser-firefox-home.png) | ![screenshot](documentation/browser-firefox-about.png) | ![screenshot](documentation/browser-firefox-contact.png) | ![screenshot](documentation/browser-firefox-etc.png) | Works as expected |
| Edge | ![screenshot](documentation/browser-edge-home.png) | ![screenshot](documentation/browser-edge-about.png) | ![screenshot](documentation/browser-chrome-edge.png) | ![screenshot](documentation/browser-edge-etc.png) | Works as expected |
| Safari | ![screenshot](documentation/browser-safari-home.png) | ![screenshot](documentation/browser-safari-about.png) | ![screenshot](documentation/browser-safari-contact.png) | ![screenshot](documentation/browser-safari-etc.png) | Minor CSS differences |
| Brave | ![screenshot](documentation/browser-brave-home.png) | ![screenshot](documentation/browser-brave-about.png) | ![screenshot](documentation/browser-brave-contact.png) | ![screenshot](documentation/browser-brave-etc.png) | Works as expected |
| Opera | ![screenshot](documentation/browser-opera-home.png) | ![screenshot](documentation/browser-opera-about.png) | ![screenshot](documentation/browser-opera-contact.png) | ![screenshot](documentation/browser-opera-etc.png) | Minor differences |
| repeat for any other tested browsers | x | x | x | x | x |

## Responsiveness

<!-- Use this space to discuss testing the live/deployed site on various device sizes. -->

The minimum requirement is for the following 3 tests:
- Mobile
- Tablet
- Desktop
<!-- 
**IMPORTANT**: You must provide screenshots of the tested responsiveness, to "prove" that you've actually tested them.

Using the "amiresponsive" mockup image (or similar) does not suffice the requirements.
Consider using some of the built-in device sizes in the Developer Tools.

If you have tested the project on your actual mobile phone or tablet, consider also including screenshots of these as well.
It showcases a higher level of manual tests, and can be seen as a positive inclusion!

Sample responsiveness testing documentation:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑 -->

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Home | About | Contact | etc | Notes |
| --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsive-mobile-home.png) | ![screenshot](documentation/responsive-mobile-about.png) | ![screenshot](documentation/responsive-mobile-contact.png) | ![screenshot](documentation/responsive-mobile-etc.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsive-tablet-home.png) | ![screenshot](documentation/responsive-tablet-about.png) | ![screenshot](documentation/responsive-tablet-contact.png) | ![screenshot](documentation/responsive-tablet-etc.png) | Works as expected |
| Desktop | ![screenshot](documentation/responsive-desktop-home.png) | ![screenshot](documentation/responsive-desktop-about.png) | ![screenshot](documentation/responsive-desktop-contact.png) | ![screenshot](documentation/responsive-desktop-etc.png) | Works as expected |
| XL Monitor | ![screenshot](documentation/responsive-xl-home.png) | ![screenshot](documentation/responsive-xl-about.png) | ![screenshot](documentation/responsive-xl-contact.png) | ![screenshot](documentation/responsive-xl-etc.png) | Scaling starts to have minor issues |
| 4K Monitor | ![screenshot](documentation/responsive-4k-home.png) | ![screenshot](documentation/responsive-4k-about.png) | ![screenshot](documentation/responsive-4k-contact.png) | ![screenshot](documentation/responsive-4k-etc.png) | Noticeable scaling issues |
| Google Pixel 7 Pro | ![screenshot](documentation/responsive-pixel-home.png) | ![screenshot](documentation/responsive-pixel-about.png) | ![screenshot](documentation/responsive-pixel-contact.png) | ![screenshot](documentation/responsive-pixel-etc.png) | Works as expected |
| iPhone 14 | ![screenshot](documentation/responsive-iphone-home.png) | ![screenshot](documentation/responsive-iphone-about.png) | ![screenshot](documentation/responsive-iphone-contact.png) | ![screenshot](documentation/responsive-iphone-etc.png) | Works as expected |
| repeat for any other tested browsers | x | x | x | x | x |

## Lighthouse Audit
<!-- 
Use this space to discuss testing the live/deployed site's Lighthouse Audit reports.
Avoid testing the local version (especially if developing in Gitpod), as this can have knock-on effects of performance.

Don't just test the home page (unless it's a single-page application).
Make sure to test the Lighthouse Audit results for all of your pages.

**IMPORTANT**: You must provide screenshots of the results, to "prove" that you've actually tested them. -->

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse-home-mobile.png) | ![screenshot](documentation/lighthouse-home-desktop.png) | Some minor warnings |
| About | ![screenshot](documentation/lighthouse-about-mobile.png) | ![screenshot](documentation/lighthouse-about-desktop.png) | Some minor warnings |
| Gallery | ![screenshot](documentation/lighthouse-gallery-mobile.png) | ![screenshot](documentation/lighthouse-gallery-desktop.png) | Slow response time due to large images |
| x | x | x | repeat for any other tested pages/sizes |

## Defensive Programming

<!-- Defensive programming (defensive design) is extremely important!

When building projects that accept user inputs or forms, you should always test the level of security for each.
Examples of this could include (not limited to):

Forms:
- Users cannot submit an empty form
- Users must enter valid email addresses

You should include any manual tests performed, and the expected results/outcome.

Testing should be replicable.
Ideally, tests cases should focus on each individual section of every page on the website.
Each test case should be specific, objective, and step-wise replicable.

Instead of adding a general overview saying that everything works fine,
consider documenting tests on each element of the page
(ie. button clicks, input box validation, navigation links, etc.) by testing them in their happy flow,
and also the bad/exception flow, mentioning the expected and observed results,
and drawing a parallel between them where applicable.

Consider using the following format for manual test cases:

Expected Outcome / Test Performed / Result Received / Fixes Implemented

- **Expected**: "Feature is expected to do X when the user does Y."
- **Testing**: "Tested the feature by doing Y."
- (either) **Result**: "The feature behaved as expected, and it did Y."
- (or) **Result**: "The feature did not respond to A, B, or C."
- **Fix**: "I did Z to the code because something was missing."

Use the table below as a basic start, and expand on it using the logic above. -->


Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Home | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/feature01.png) |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature02.png) |
| About | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/feature03.png) |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature04.png) |
| Gallery | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/feature05.png) |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature06.png) |
| Contact | | | | | |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/feature07.png) |
| | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature08.png) |
| repeat for all remaining pages | x | x | x | x | x |


<!-- Another way of performing defensive testing is a simple Pass/Fail for each test.
The assessors prefer the above method, with the full test explained, but this is also acceptable in most cases. -->

<!-- When in doubt, use the above method instead, and delete the table below. -->

<!-- 
| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Home | | | | |
| | Click on Logo | Redirection to Home page | Pass | |
| | Click on Home link in navbar | Redirection to Home page | Pass | |
| Gallery | | | | |
| | Click on Gallery link in navbar | Redirection to Gallery page | Pass | |
| | Load gallery images | All images load as expected | Pass | |
| Contact | | | | |
| | Click on Contact link in navbar | Redirection to Contact page | Pass | |
| | Enter first/last name | Field will accept freeform text | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter message in textarea | Field will accept freeform text | Pass | |
| | Click the Submit button | Redirects user to form-dump | Pass | User must click 'Back' button to return |
| Sign Up | | | | |
| | Click on Sign Up button | Redirection to Sign Up page | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter valid password (twice) | Field will only accept password format | Pass | |
| | Click on Sign Up button | Asks user to confirm email page | Pass | Email sent to user |
| | Confirm email | Redirects user to blank Sign In page | Pass | |
| Log In | | | | |
| | Click on the Login link | Redirection to Login page | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter valid password | Field will only accept password format | Pass | |
| | Click Login button | Redirects user to home page | Pass | |
| Log Out | | | | |
| | Click Logout button | Redirects user to logout page | Pass | Confirms logout first |
| | Click Confirm Logout button | Redirects user to home page | Pass | |
| Profile | | | | |
| | Click on Profile button | User will be redirected to the Profile page | Pass | |
| | Click on the Edit button | User will be redirected to the edit profile page | Pass | |
| | Click on the My Orders link | User will be redirected to the My Orders page | Pass | |
| | Brute forcing the URL to get to another user's profile | User should be given an error | Pass | Redirects user back to own profile |
| repeat for all remaining pages | x | x | x | x | -->

## User Story Testing

<!-- Most of your project's **features** should already align with the **user stories**,
so this should as simple as creating a table with the user story, matching with the re-used screenshot
from the respective feature. -->

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature01.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature02.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature03.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature04.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature05.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature06.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature07.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature08.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature09.png) |
| repeat for all remaining user stories | x |

## Bugs

<!-- This section is primarily used for JavaScript and Python applications,
but feel free to use this section to document any HTML/CSS bugs you might run into.

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way! -->

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I _____________________.


## Unfixed Bugs

<!-- You will need to mention unfixed bugs and why they were not fixed.
This section should include shortcomings of the frameworks or technologies used.
Although time can be a big variable to consider, paucity of time and difficulty understanding
implementation is not a valid reason to leave bugs unfixed.

If you've identified any unfixed bugs, no matter how small, be sure to list them here.
It's better to be honest and list them, because if it's not documented and an assessor finds the issue,
they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them. -->

Some examples:

- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- For PP3, when using a helper `clear()` function, any text above the height of the terminal does not clear, and remains when you scroll up.

    ![screenshot](documentation/unfixed-bug02.png)

    - Attempted fix: I tried to adjust the terminal size, but it only resizes the actual terminal, not the allowable area for text.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](documentation/unfixed-bug03.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.

<!-- 
If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

There are no remaining bugs that I am aware of. -->
