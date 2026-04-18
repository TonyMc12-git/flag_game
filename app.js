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

const nonUnCountries = [
  { name: "American Samoa", code: "AS" },
  { name: "Anguilla", code: "AI" },
  { name: "Aruba", code: "AW" },
  { name: "Bermuda", code: "BM" },
  { name: "British Virgin Islands", code: "VG" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Cook Islands", code: "CK" },
  { name: "Curacao", code: "CW" },
  { name: "Falkland Islands", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "French Polynesia", code: "PF" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greenland", code: "GL" },
  { name: "Guam", code: "GU" },
  { name: "Guernsey", code: "GG" },
  { name: "Hong Kong", code: "HK" },
  { name: "Isle of Man", code: "IM" },
  { name: "Jersey", code: "JE" },
  { name: "Kosovo", code: "XK" },
  { name: "Macau", code: "MO" },
  { name: "Montserrat", code: "MS" },
  { name: "New Caledonia", code: "NC" },
  { name: "Niue", code: "NU" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Palestine", code: "PS" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Saint Barthelemy", code: "BL" },
  { name: "Saint Martin", code: "MF" },
  { name: "Sint Maarten", code: "SX" },
  { name: "Taiwan", code: "TW" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "U.S. Virgin Islands", code: "VI" },
  { name: "Vatican City", code: "VA" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" }
];

const gameModes = {
  un: {
    countries,
    scoreContext: "of 193 UN countries",
    switchLabel: "non UN countries?"
  },
  nonUn: {
    countries: nonUnCountries,
    scoreContext: `of ${nonUnCountries.length} non-UN countries/territories`,
    switchLabel: "UN countries?"
  }
};

const flagEmojiEl = document.getElementById("flag-emoji");
const optionsGridEl = document.getElementById("options-grid");
const scoreEl = document.getElementById("score");
const scoreContextEl = document.getElementById("score-context");
const fiftyButtonEl = document.getElementById("fifty-button");
const modeButtonEl = document.getElementById("mode-button");
const celebrationEl = document.getElementById("celebration");
const celebrationKickerEl = document.getElementById("celebration-kicker");
const celebrationTitleEl = document.getElementById("celebration-title");
const celebrationCopyEl = document.getElementById("celebration-copy");
const celebrationButtonEl = document.getElementById("celebration-button");

const state = {
  mode: "un",
  currentCountry: null,
  currentOptions: [],
  deck: [],
  isLocked: false,
  isFiftyUsed: false,
  isComplete: false,
  correct: 0,
  presented: 0
};

registerServiceWorker();
resetGame("un");
fiftyButtonEl.addEventListener("click", useFiftyFifty);
modeButtonEl.addEventListener("click", () => {
  resetGame(state.mode === "un" ? "nonUn" : "un");
});
celebrationButtonEl.addEventListener("click", () => {
  hideCelebration();
  if (state.isComplete) {
    return;
  }

  startRound();
});

function resetGame(mode) {
  state.mode = mode;
  state.deck = shuffleList(getCurrentCountries());
  state.correct = 0;
  state.presented = 0;
  state.isComplete = false;
  startRound();
}

function startRound() {
  const modeConfig = gameModes[state.mode];
  if (state.deck.length === 0) {
    state.isLocked = true;
    optionsGridEl.innerHTML = "";
    fiftyButtonEl.disabled = true;
    flagEmojiEl.textContent = "Done";
    state.isComplete = true;
    renderScore();
    showCompletion();
    return;
  }

  state.currentCountry = state.deck.pop();
  state.currentOptions = buildOptions(state.currentCountry);
  state.isLocked = false;
  state.isFiftyUsed = false;
  state.isComplete = false;
  fiftyButtonEl.disabled = false;
  modeButtonEl.textContent = modeConfig.switchLabel;
  scoreContextEl.textContent = modeConfig.scoreContext;

  flagEmojiEl.textContent = countryCodeToFlag(state.currentCountry.code);
  renderOptions(state.currentOptions);
  renderScore();
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
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      button.classList.add("pressing");
      chooseCountry(country, button);
    });
    button.addEventListener("pointerup", () => {
      button.classList.remove("pressing");
    });
    button.addEventListener("pointercancel", () => {
      button.classList.remove("pressing");
    });
    optionsGridEl.appendChild(button);
  });
}

function chooseCountry(country, button) {
  if (state.isLocked) {
    return;
  }

  state.isLocked = true;
  fiftyButtonEl.disabled = true;
  const isCorrect = country.code === state.currentCountry.code;
  state.presented += 1;
  if (isCorrect) {
    state.correct += 1;
  }

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

function showCelebration(isCorrect, chosenName) {
  celebrationEl.classList.toggle("wrong", !isCorrect);
  celebrationKickerEl.textContent = isCorrect ? "Correct" : "Answer";
  celebrationTitleEl.textContent = isCorrect ? "Nice!" : state.currentCountry.name;
  celebrationCopyEl.textContent = isCorrect
    ? `${state.currentCountry.name} is right.`
    : `You chose ${chosenName}.`;
  celebrationEl.classList.add("show");
  celebrationEl.setAttribute("aria-hidden", "false");
}

function showCompletion() {
  celebrationEl.classList.remove("wrong");
  celebrationKickerEl.textContent = "Complete";
  celebrationTitleEl.textContent = "Full Set Done";
  celebrationCopyEl.textContent = `You finished ${gameModes[state.mode].scoreContext}. Restart the app to play this set again.`;
  celebrationEl.classList.add("show");
  celebrationEl.setAttribute("aria-hidden", "false");
}

function hideCelebration() {
  celebrationEl.classList.remove("show");
  celebrationEl.setAttribute("aria-hidden", "true");
}

function renderScore() {
  scoreEl.textContent = `${state.correct} / ${state.presented}`;
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

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
