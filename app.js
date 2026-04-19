const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Brazil", code: "BR" },
  { name: "Brunei", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cabo Verde", code: "CV" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote d'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czechia", code: "CZ" },
  { name: "Democratic Republic of the Congo", code: "CD" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Eswatini", code: "SZ" },
  { name: "Ethiopia", code: "ET" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Greece", code: "GR" },
  { name: "Grenada", code: "GD" },
  { name: "Guatemala", code: "GT" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Honduras", code: "HN" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Kuwait", code: "KW" },
  { name: "Laos", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia", code: "FM" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "North Macedonia", code: "MK" },
  { name: "North Korea", code: "KP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Qatar", code: "QA" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Korea", code: "KR" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syria", code: "SY" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" }
];

const lookalikeFlagGroups = [
  ["ID", "MC"],
  ["RO", "TD"]
];

const longOptionCodes = new Set(["GS", "SH"]);

const nonUnCountries = [
  { name: "American Samoa", code: "AS" },
  { name: "Antarctica", code: "AQ" },
  { name: "Anguilla", code: "AI" },
  { name: "Aland Islands", code: "AX" },
  { name: "Aruba", code: "AW" },
  { name: "Bermuda", code: "BM" },
  { name: "British Virgin Islands", code: "VG" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cook Islands", code: "CK" },
  { name: "Cocos Islands", code: "CC" },
  { name: "Curacao", code: "CW" },
  { name: "Falkland Islands", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "French Polynesia", code: "PF" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greenland", code: "GL" },
  { name: "Guam", code: "GU" },
  { name: "Guernsey", code: "GG" },
  { name: "Hong Kong", code: "HK" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Isle of Man", code: "IM" },
  { name: "Jersey", code: "JE" },
  { name: "Kosovo", code: "XK" },
  { name: "Macau", code: "MO" },
  { name: "Montserrat", code: "MS" },
  { name: "New Caledonia", code: "NC" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Niue", code: "NU" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Palestine", code: "PS" },
  { name: "Pitcairn Islands", code: "PN" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Saint Barthelemy", code: "BL" },
  { name: "Saint Helena, Ascension and Tristan da Cunha", code: "SH" },
  { name: "Sint Maarten", code: "SX" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Taiwan", code: "TW" },
  { name: "Tokelau", code: "TK" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "U.S. Virgin Islands", code: "VI" },
  { name: "Vatican City", code: "VA" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" }
];

const duplicateFlagGroups = [
  {
    name: "French flag",
    flagCode: "FR",
    correct: [
      { name: "France", code: "FR" },
      { name: "French Guiana", code: "GF" },
      { name: "Guadeloupe", code: "GP" },
      { name: "Martinique", code: "MQ" },
      { name: "Mayotte", code: "YT" },
      { name: "Reunion", code: "RE" },
      { name: "Saint Martin", code: "MF" },
      { name: "Saint Pierre and Miquelon", code: "PM" }
    ]
  },
  {
    name: "Norwegian flag",
    flagCode: "NO",
    correct: [
      { name: "Norway", code: "NO" },
      { name: "Bouvet Island", code: "BV" },
      { name: "Svalbard and Jan Mayen", code: "SJ" }
    ]
  },
  {
    name: "Australian flag",
    flagCode: "AU",
    correct: [
      { name: "Australia", code: "AU" },
      { name: "Heard Island and McDonald Islands", code: "HM" }
    ]
  },
  {
    name: "Dutch flag",
    flagCode: "NL",
    correct: [
      { name: "Netherlands", code: "NL" },
      { name: "Caribbean Netherlands", code: "BQ" }
    ]
  },
  {
    name: "U.S. flag",
    flagCode: "US",
    correct: [
      { name: "United States", code: "US" },
      { name: "U.S. Outlying Islands", code: "UM" }
    ]
  }
];

const combinedCountries = [...countries, ...nonUnCountries];
const duplicateGroupsByFlagCode = new Map(
  duplicateFlagGroups.map((group) => [group.flagCode, group])
);

const APP_VERSION = "20260419-fit1";
const HIGH_SCORE_PREFIX = "flagGameHighScore";
const TEMPORARY_FIRST_CODES = ["NP", "QA", "BH", "LV"];

const gameModes = {
  combined: {
    type: "single",
    countries: combinedCountries,
    scoreContext: `of ${combinedCountries.length} countries / territories`,
    switchLabel: "UN countries only?"
  },
  un: {
    type: "single",
    countries,
    scoreContext: "of 193 UN countries",
    switchLabel: "All countries?"
  }
};

const flagEmojiEl = document.getElementById("flag-emoji");
const optionsGridEl = document.getElementById("options-grid");
const scoreEl = document.getElementById("score");
const scoreContextEl = document.getElementById("score-context");
const pointsScoreEl = document.getElementById("points-score");
const roundTimerEl = document.getElementById("round-timer");
const highScoreEl = document.getElementById("high-score");
const fiftyButtonEl = document.getElementById("fifty-button");
const modeButtonEl = document.getElementById("mode-button");
const endGameButtonEl = document.getElementById("end-game-button");
const bonusToastEl = document.getElementById("bonus-toast");
const celebrationEl = document.getElementById("celebration");
const celebrationKickerEl = document.getElementById("celebration-kicker");
const celebrationTitleEl = document.getElementById("celebration-title");
const celebrationCopyEl = document.getElementById("celebration-copy");
const celebrationButtonEl = document.getElementById("celebration-button");

const state = {
  mode: "combined",
  currentCountry: null,
  currentDuplicateGroup: null,
  currentOptions: [],
  deck: [],
  selectedCodes: new Set(),
  feedbackTimer: null,
  feedbackReadyAt: 0,
  bonusTimer: null,
  timerId: null,
  timerSegmentStartedAt: 0,
  streakElapsedMs: 0,
  resetTimerOnNextRound: false,
  points: 0,
  highScore: 0,
  correctStreak: 0,
  isEnded: false,
  isLocked: false,
  isFiftyUsed: false,
  isComplete: false,
  correct: 0,
  presented: 0
};

registerServiceWorker();
renderPoints();
resetGame("combined");
fiftyButtonEl.addEventListener("click", useFiftyFifty);
modeButtonEl.addEventListener("click", () => {
  resetGame(state.mode === "combined" ? "un" : "combined");
});
endGameButtonEl.addEventListener("click", handleEndGame);
celebrationButtonEl.addEventListener("click", () => {
  if (Date.now() < state.feedbackReadyAt) {
    return;
  }

  hideCelebration();
  if (state.isComplete) {
    return;
  }

  startRound();
});
window.addEventListener("resize", () => {
  window.requestAnimationFrame(() => {
    fitOptionText();
    fitControlText();
  });
});

function resetGame(mode) {
  stopRoundTimer();
  state.mode = mode;
  state.deck = buildDeck(gameModes[state.mode].countries);
  state.correct = 0;
  state.presented = 0;
  state.points = 0;
  state.highScore = readHighScore(state.mode);
  state.correctStreak = 0;
  state.streakElapsedMs = 0;
  state.resetTimerOnNextRound = false;
  state.isComplete = false;
  state.isEnded = false;
  state.selectedCodes = new Set();
  endGameButtonEl.textContent = "That'll do";
  endGameButtonEl.classList.remove("new-game");
  modeButtonEl.disabled = false;
  renderPoints();
  renderTimer(0);
  startRound();
}

function buildDeck(sourceCountries) {
  const testingCountries = TEMPORARY_FIRST_CODES
    .map((code) => sourceCountries.find((country) => country.code === code))
    .filter(Boolean);
  const testingCodes = new Set(testingCountries.map((country) => country.code));
  const remainingCountries = shuffleList(sourceCountries.filter((country) => !testingCodes.has(country.code)));
  return [...remainingCountries, ...testingCountries.reverse()];
}

function startRound() {
  if (state.isEnded) {
    return;
  }

  const modeConfig = gameModes[state.mode];
  if (state.deck.length === 0) {
    state.isLocked = true;
    stopRoundTimer();
    optionsGridEl.innerHTML = "";
    fiftyButtonEl.disabled = true;
    document.body.classList.remove("duplicate-mode");
    fiftyButtonEl.classList.remove("confirm-button");
    flagEmojiEl.textContent = "Done";
    state.isComplete = true;
    renderScore();
    showCompletion();
    return;
  }

  state.currentCountry = state.deck.pop();
  state.currentDuplicateGroup = state.mode === "combined"
    ? duplicateGroupsByFlagCode.get(state.currentCountry.code) || null
    : null;
  state.currentOptions = state.currentDuplicateGroup
    ? buildDuplicateOptions(state.currentDuplicateGroup)
    : buildOptions(state.currentCountry);
  state.isLocked = false;
  state.isFiftyUsed = false;
  state.isComplete = false;
  state.selectedCodes = new Set();
  const isDuplicateRound = Boolean(state.currentDuplicateGroup);
  document.body.classList.toggle("duplicate-mode", isDuplicateRound);
  fiftyButtonEl.classList.toggle("confirm-button", isDuplicateRound);
  fiftyButtonEl.textContent = isDuplicateRound ? "Confirm" : "Use your 50/50?";
  fiftyButtonEl.disabled = false;
  modeButtonEl.textContent = modeConfig.switchLabel;
  scoreContextEl.textContent = modeConfig.scoreContext;
  fitControlText();

  flagEmojiEl.textContent = countryCodeToFlag(state.currentCountry.code);
  renderOptions(state.currentOptions);
  renderScore();
  startRoundTimer();
}

function buildOptions(correctCountry) {
  const sourceCountries = getCurrentCountries();
  const blockedCodes = getLookalikeBlockedCodes(correctCountry.code);
  const distractors = shuffleList(sourceCountries.filter((country) => {
    return country.code !== correctCountry.code && !blockedCodes.has(country.code);
  }))
    .slice(0, 19);
  return [correctCountry, ...distractors]
    .sort((left, right) => left.name.localeCompare(right.name));
}

function buildDuplicateOptions(flagGroup) {
  const correctCodes = new Set(flagGroup.correct.map((country) => country.code));
  const distractors = shuffleList(combinedCountries.filter((country) => !correctCodes.has(country.code)))
    .slice(0, 20 - flagGroup.correct.length);
  return [...flagGroup.correct, ...distractors]
    .sort((left, right) => left.name.localeCompare(right.name));
}

function getCurrentCountries() {
  return gameModes[state.mode].countries;
}

function getLookalikeBlockedCodes(countryCode) {
  const matchingGroup = lookalikeFlagGroups.find((group) => group.includes(countryCode));
  if (!matchingGroup) {
    return new Set();
  }

  return new Set(matchingGroup.filter((code) => code !== countryCode));
}

function renderOptions(options) {
  optionsGridEl.innerHTML = "";

  options.forEach((country) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = country.name;
    button.dataset.countryCode = country.code;
    if (longOptionCodes.has(country.code)) {
      button.classList.add("long-option");
    }
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      button.classList.add("pressing");
      if (state.currentDuplicateGroup) {
        toggleDuplicateChoice(country, button);
      } else {
        chooseCountry(country, button);
      }
    });
    button.addEventListener("pointerup", () => {
      button.classList.remove("pressing");
    });
    button.addEventListener("pointercancel", () => {
      button.classList.remove("pressing");
    });
    optionsGridEl.appendChild(button);
  });

  window.requestAnimationFrame(fitOptionText);
}

function toggleDuplicateChoice(country, button) {
  if (state.isLocked) {
    return;
  }

  if (state.selectedCodes.has(country.code)) {
    state.selectedCodes.delete(country.code);
    button.classList.remove("selected");
  } else {
    state.selectedCodes.add(country.code);
    button.classList.add("selected");
  }
}

function chooseCountry(country, button) {
  if (state.isLocked) {
    return;
  }

  const roundMs = stopRoundTimer();
  state.isLocked = true;
  fiftyButtonEl.disabled = true;
  const isCorrect = country.code === state.currentCountry.code;
  state.presented += 1;
  if (isCorrect) {
    state.correct += 1;
  }
  applyScoring(isCorrect, state.isFiftyUsed ? 5 : 10, roundMs);

  [...optionsGridEl.querySelectorAll(".option-button")].forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.textContent === state.currentCountry.name) {
      optionButton.classList.add("correct");
    }
  });

  if (!isCorrect) {
    button.classList.add("incorrect");
  }

  renderScore();
  showCelebration(isCorrect, country.name);
}

function useFiftyFifty() {
  if (state.currentDuplicateGroup) {
    checkDuplicateSelection();
    return;
  }

  if (state.isLocked || state.isFiftyUsed) {
    return;
  }

  state.isFiftyUsed = true;
  fiftyButtonEl.disabled = true;

  const wrongButtons = [...optionsGridEl.querySelectorAll(".option-button")]
    .filter((button) => button.dataset.countryCode !== state.currentCountry.code);

  shuffleList(wrongButtons)
    .slice(0, 10)
    .forEach((button) => {
      button.disabled = true;
      button.classList.add("eliminated");
    });
}

function checkDuplicateSelection() {
  if (state.isLocked) {
    return;
  }

  const roundMs = stopRoundTimer();
  state.isLocked = true;
  fiftyButtonEl.disabled = true;
  const correctCodes = new Set(state.currentDuplicateGroup.correct.map((country) => country.code));
  const missedCodes = [...correctCodes].filter((code) => !state.selectedCodes.has(code));
  const extraCodes = [...state.selectedCodes].filter((code) => !correctCodes.has(code));
  const isCorrect = missedCodes.length === 0 && extraCodes.length === 0;
  state.presented += 1;
  if (isCorrect) {
    state.correct += 1;
  }
  applyScoring(isCorrect, state.currentDuplicateGroup.correct.length * 10, roundMs);

  [...optionsGridEl.querySelectorAll(".option-button")].forEach((optionButton) => {
    optionButton.disabled = true;
    if (correctCodes.has(optionButton.dataset.countryCode)) {
      optionButton.classList.add("correct");
    } else if (state.selectedCodes.has(optionButton.dataset.countryCode)) {
      optionButton.classList.add("incorrect");
    }
  });

  renderScore();
  showDuplicateCelebration(isCorrect, missedCodes, extraCodes);
}

function showCelebration(isCorrect, chosenName) {
  celebrationEl.classList.toggle("wrong", !isCorrect);
  celebrationKickerEl.textContent = isCorrect ? "Correct" : "Answer";
  celebrationTitleEl.textContent = isCorrect ? "Nice!" : state.currentCountry.name;
  celebrationCopyEl.textContent = isCorrect
    ? `${state.currentCountry.name} is right.`
    : `You chose ${chosenName}.`;
  showFeedback();
}

function showDuplicateCelebration(isCorrect, missedCodes, extraCodes) {
  celebrationEl.classList.toggle("wrong", !isCorrect);
  celebrationKickerEl.textContent = isCorrect ? "Correct" : "Answer";
  celebrationTitleEl.textContent = isCorrect ? "Nice!" : state.currentDuplicateGroup.name;
  celebrationCopyEl.textContent = isCorrect
    ? "You got every matching option."
    : buildDuplicateAnswerCopy(missedCodes, extraCodes);
  showFeedback();
}

function buildDuplicateAnswerCopy(missedCodes, extraCodes) {
  const namesByCode = new Map(state.currentOptions.map((country) => [country.code, country.name]));
  const missedNames = missedCodes.map((code) => namesByCode.get(code)).filter(Boolean);
  const extraNames = extraCodes.map((code) => namesByCode.get(code)).filter(Boolean);
  const parts = [];
  if (missedNames.length > 0) {
    parts.push(`Missed: ${missedNames.join(", ")}.`);
  }
  if (extraNames.length > 0) {
    parts.push(`Extra: ${extraNames.join(", ")}.`);
  }
  return parts.join(" ");
}

function showCompletion() {
  celebrationEl.classList.remove("wrong");
  celebrationKickerEl.textContent = "Complete";
  celebrationTitleEl.textContent = "Full Set Done";
  celebrationCopyEl.textContent = `You finished ${gameModes[state.mode].scoreContext}. Restart the app to play this set again.`;
  showFeedback();
}

function showFeedback() {
  window.clearTimeout(state.feedbackTimer);
  state.feedbackReadyAt = Date.now() + 400;
  celebrationButtonEl.disabled = true;
  celebrationEl.classList.add("show");
  celebrationEl.setAttribute("aria-hidden", "false");
  state.feedbackTimer = window.setTimeout(() => {
    celebrationButtonEl.disabled = false;
  }, 400);
}

function hideCelebration() {
  window.clearTimeout(state.feedbackTimer);
  celebrationButtonEl.disabled = false;
  celebrationEl.classList.remove("show");
  celebrationEl.setAttribute("aria-hidden", "true");
}

function renderScore() {
  scoreEl.textContent = `${state.correct} / ${state.presented}`;
}

function handleEndGame() {
  if (state.isEnded) {
    resetGame(state.mode);
    return;
  }

  state.isEnded = true;
  state.isLocked = true;
  stopRoundTimer();
  updateHighScore();
  renderPoints();
  fiftyButtonEl.disabled = true;
  modeButtonEl.disabled = true;
  endGameButtonEl.textContent = "New Game";
  endGameButtonEl.classList.add("new-game");
  [...optionsGridEl.querySelectorAll(".option-button")].forEach((button) => {
    button.disabled = true;
  });
}

function startRoundTimer() {
  stopRoundTimer();
  if (state.resetTimerOnNextRound) {
    state.streakElapsedMs = 0;
    state.resetTimerOnNextRound = false;
  }

  state.timerSegmentStartedAt = performance.now();
  renderTimer(state.streakElapsedMs);
  state.timerId = window.setInterval(() => {
    renderTimer(state.streakElapsedMs + performance.now() - state.timerSegmentStartedAt);
  }, 100);
}

function stopRoundTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }

  if (!state.timerSegmentStartedAt) {
    return state.streakElapsedMs || 0;
  }

  state.streakElapsedMs += performance.now() - state.timerSegmentStartedAt;
  state.timerSegmentStartedAt = 0;
  renderTimer(state.streakElapsedMs);
  return state.streakElapsedMs;
}

function renderTimer(milliseconds) {
  const secondsText = (milliseconds / 1000).toFixed(1).padStart(5, "0");
  roundTimerEl.textContent = `${secondsText}s`;
}

function applyScoring(isCorrect, basePoints, roundMs) {
  const bonusMessages = [];

  if (isCorrect) {
    state.points += basePoints;
    state.correctStreak += 1;

    if (state.correctStreak % 10 === 0) {
      state.points += 100;
      bonusMessages.push("+100 streak bonus");

      const streakSeconds = roundMs / 1000;
      if (streakSeconds <= 10) {
        state.points += 400;
        bonusMessages.push("+400 10-in-10 bonus");
      } else if (streakSeconds <= 20) {
        state.points += 200;
        bonusMessages.push("+200 10-in-20 bonus");
      }
    }
  } else {
    state.correctStreak = 0;
    state.resetTimerOnNextRound = true;
  }

  updateHighScore();
  renderPoints();

  if (bonusMessages.length > 0) {
    showBonusToast(bonusMessages.join(" / "));
  }
}

function renderPoints() {
  pointsScoreEl.textContent = state.points;
  highScoreEl.textContent = state.highScore;
}

function updateHighScore() {
  if (state.points <= state.highScore) {
    return;
  }

  state.highScore = state.points;
  try {
    localStorage.setItem(getHighScoreKey(state.mode), String(state.highScore));
  } catch {
    // Some private browsing modes can block localStorage writes.
  }
}

function readHighScore(mode) {
  try {
    const storedScore = Number(localStorage.getItem(getHighScoreKey(mode)));
    return Number.isFinite(storedScore) && storedScore > 0 ? storedScore : 0;
  } catch {
    return 0;
  }
}

function getHighScoreKey(mode) {
  return `${HIGH_SCORE_PREFIX}:${mode}`;
}

function showBonusToast(message) {
  window.clearTimeout(state.bonusTimer);
  bonusToastEl.textContent = message;
  bonusToastEl.classList.add("show");
  bonusToastEl.setAttribute("aria-hidden", "false");
  state.bonusTimer = window.setTimeout(() => {
    bonusToastEl.classList.remove("show");
    bonusToastEl.setAttribute("aria-hidden", "true");
  }, 1400);
}

function fitOptionText() {
  [...optionsGridEl.querySelectorAll(".option-button")].forEach((button) => {
    fitTextToBox(button, {
      minSize: button.classList.contains("long-option") ? 10 : 11,
      step: 0.5
    });
  });
}

function fitControlText() {
  [fiftyButtonEl, modeButtonEl, scoreContextEl].forEach((element) => {
    fitTextToBox(element, { minSize: 9, step: 0.5 });
  });
}

function fitTextToBox(element, options = {}) {
  const minSize = options.minSize || 10;
  const step = options.step || 1;
  element.style.fontSize = "";
  let fontSize = parseFloat(window.getComputedStyle(element).fontSize);

  while (fontSize > minSize && doesTextOverflow(element)) {
    fontSize -= step;
    element.style.fontSize = `${fontSize}px`;
  }
}

function doesTextOverflow(element) {
  return element.scrollWidth > element.clientWidth + 1 || element.scrollHeight > element.clientHeight + 1;
}

function countryCodeToFlag(code) {
  return code
    .toUpperCase()
    .split("")
    .map((character) => String.fromCodePoint(127397 + character.charCodeAt(0)))
    .join("");
}

function sampleOne(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffleList(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  let isRefreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (isRefreshing) {
      return;
    }

    isRefreshing = true;
    window.location.reload();
  });

  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`./sw.js?v=${APP_VERSION}`).then((registration) => {
      watchForServiceWorkerUpdate(registration);
      checkForAppUpdate(registration);
    }).catch(() => {});
  });

  window.addEventListener("pageshow", () => {
    checkForAppUpdate();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      checkForAppUpdate();
    }
  });
}

function watchForServiceWorkerUpdate(registration) {
  registration.addEventListener("updatefound", () => {
    const installingWorker = registration.installing;
    if (!installingWorker) {
      return;
    }

    installingWorker.addEventListener("statechange", () => {
      if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
        installingWorker.postMessage({ type: "SKIP_WAITING" });
      }
    });
  });
}

function checkForAppUpdate(registration) {
  const updateRegistration = registration
    ? Promise.resolve(registration)
    : navigator.serviceWorker.getRegistration();

  updateRegistration.then((activeRegistration) => {
    if (!activeRegistration) {
      return;
    }

    activeRegistration.update().catch(() => {});
    if (activeRegistration.waiting) {
      activeRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  }).catch(() => {});
}
