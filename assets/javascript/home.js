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




// credit Erikas Ramanauskas

"use strict";

// this file is working with local storage and saving highscores and current game

// all variables for highs-scores page
const hsEasyGamesCount = document.getElementById(`hs-easy-games-count`);
const hsEasyWeekCount = document.getElementById(`hs-easy-week-count`);
const hsEasyTotalCount = document.getElementById(`hs-easy-total-count`);

const hsMediumGamesCount = document.getElementById(`hs-medium-games-count`);
const hsMediumWeekCount = document.getElementById(`hs-medium-week-count`);
const hsMediumTotalCount = document.getElementById(`hs-medium-total-count`);

const hshardGamesCount = document.getElementById(`hs-hard-games-count`);
const hshardWeekCount = document.getElementById(`hs-hard-week-count`);
const hshardTotalCount = document.getElementById(`hs-hard-total-count`);

const hsStorage = getLocalStorage();

// used when game is loaded and For highscore update
function getLocalStorage() {
  const gameSetting = JSON.parse(localStorage.getItem(`gameSetting`));

  if (!gameSetting) return;

  return gameSetting;
}

function renderHighScores() {
  hsEasyGamesCount.innerHTML = hsStorage.easyGamesPlayed;
  hsEasyWeekCount.innerHTML = Math.floor(hsStorage.easyWeekScore);
  hsEasyTotalCount.innerHTML = Math.floor(hsStorage.easyHighestScore);

  hsMediumGamesCount.innerHTML = hsStorage.mediumGamesPlayed;
  hsMediumWeekCount.innerHTML = Math.floor(hsStorage.mediumWeekScore);
  hsMediumTotalCount.innerHTML = Math.floor(hsStorage.mediumHighestScore);

  hshardGamesCount.innerHTML = hsStorage.hardGamesPlayed;
  hshardWeekCount.innerHTML = Math.floor(hsStorage.hardWeekScore);
  hshardTotalCount.innerHTML = Math.floor(hsStorage.hardHighestScore);
}

window.addEventListener(`load`, () => {
  renderHighScores();
});
