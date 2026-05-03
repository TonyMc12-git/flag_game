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

const regionCodeGroups = {
  africa: [
    "AO", "BJ", "BW", "BF", "BI", "CM", "CV", "CF", "TD", "KM", "CG", "CD", "CI", "DJ",
    "DZ", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GW", "GQ", "KE", "LR", "LS",
    "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC",
    "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TG", "TN", "TZ", "UG", "YT", "ZA",
    "ZM", "ZW"
  ],
  europe: [
    "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CZ", "DE", "DK", "EE", "ES",
    "FI", "FO", "FR", "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE",
    "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO",
    "RS", "RU", "SE", "SI", "SK", "SM", "UA", "VA", "XK"
  ],
  asia: [
    "AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CC", "CN", "CX", "CY", "GE", "HK",
    "ID", "IL", "IN", "IO", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ",
    "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA",
    "SA", "SG", "SY", "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE"
  ],
  americas: [
    "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BZ", "CA", "CL",
    "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GL", "GT", "GY", "HN", "HT",
    "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY",
    "SR", "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI"
  ],
  australasia: [
    "AS", "AU", "CK", "FJ", "FM", "GU", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ",
    "PF", "PG", "PN", "PW", "SB", "TK", "TO", "TV", "VU", "WF", "WS"
  ]
};

const unPresetCodes = {
  africa: new Set([
    "DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CG", "CD", "CI",
    "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR",
    "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW", "ST", "SN",
    "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "ZM", "ZW"
  ]),
  europe: new Set([
    "AL", "AD", "AT", "BY", "BE", "BA", "BG", "HR", "CZ", "DK", "EE", "FI", "FR", "DE",
    "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "MD", "MC", "ME", "NL",
    "MK", "NO", "PL", "PT", "RO", "RU", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "UA",
    "GB"
  ]),
  asia: new Set([
    "AF", "AM", "AZ", "BH", "BD", "BT", "BN", "KH", "CN", "CY", "GE", "IN", "ID", "IR",
    "IQ", "IL", "JP", "JO", "KZ", "KW", "KG", "LA", "LB", "MY", "MV", "MN", "MM", "NP",
    "KP", "OM", "PK", "PH", "QA", "SA", "SG", "KR", "LK", "SY", "TJ", "TH", "TL", "TR",
    "TM", "AE", "UZ", "VN", "YE"
  ]),
  americas: new Set([
    "AG", "AR", "BS", "BB", "BZ", "BO", "BR", "CA", "CL", "CO", "CR", "CU", "DM", "DO",
    "EC", "SV", "GD", "GT", "GY", "HT", "HN", "JM", "MX", "NI", "PA", "PY", "PE", "KN",
    "LC", "VC", "SR", "TT", "US", "UY", "VE"
  ]),
  australasia: new Set([
    "AU", "FJ", "KI", "MH", "FM", "NR", "NZ", "PW", "PG", "WS", "SB", "TO", "TV", "VU"
  ])
};

const regionByCode = new Map();
Object.entries(regionCodeGroups).forEach(([region, codes]) => {
  codes.forEach((code) => {
    regionByCode.set(code, region);
  });
});

const APP_VERSION = "20260503-flagstrikes8";
const HIGH_SCORE_PREFIX = "flagGameHighScore";
const flagLoadStates = new Map();
const DEFAULT_DIFFICULTY_LABEL = "This is too hard \u{1F62D}";
const CHANGED_DIFFICULTY_LABEL = "Change selection";

const countrySetConfigs = {
  combined: {
    countries: combinedCountries,
    scoreContext: `of ${combinedCountries.length} countries / territories`,
    menuLabel: `All Countries/territories (${combinedCountries.length})`
  },
  un: {
    countries,
    scoreContext: `of ${countries.length} UN countries`,
    menuLabel: `UN countries only (${countries.length})`
  },
  africa: {
    countries: countries.filter((country) => unPresetCodes.africa.has(country.code)),
    scoreContext: "",
    menuLabel: ""
  },
  europe: {
    countries: countries.filter((country) => unPresetCodes.europe.has(country.code)),
    scoreContext: "",
    menuLabel: ""
  },
  asia: {
    countries: countries.filter((country) => unPresetCodes.asia.has(country.code)),
    scoreContext: "",
    menuLabel: ""
  },
  americas: {
    countries: countries.filter((country) => unPresetCodes.americas.has(country.code)),
    scoreContext: "",
    menuLabel: ""
  },
  australasia: {
    countries: countries.filter((country) => unPresetCodes.australasia.has(country.code)),
    scoreContext: "",
    menuLabel: ""
  },
  nonun: {
    countries: nonUnCountries,
    scoreContext: `of ${nonUnCountries.length} non-UN countries / territories`,
    menuLabel: `Non-UN only (${nonUnCountries.length})`
  }
};

countrySetConfigs.africa.scoreContext = `of ${countrySetConfigs.africa.countries.length} African UN countries`;
countrySetConfigs.africa.menuLabel = `Africa UN only (${countrySetConfigs.africa.countries.length})`;
countrySetConfigs.europe.scoreContext = `of ${countrySetConfigs.europe.countries.length} European UN countries`;
countrySetConfigs.europe.menuLabel = `Europe UN only (${countrySetConfigs.europe.countries.length})`;
countrySetConfigs.asia.scoreContext = `of ${countrySetConfigs.asia.countries.length} Asian UN countries`;
countrySetConfigs.asia.menuLabel = `Asia UN only (${countrySetConfigs.asia.countries.length})`;
countrySetConfigs.americas.scoreContext = `of ${countrySetConfigs.americas.countries.length} American UN countries`;
countrySetConfigs.americas.menuLabel = `Americas UN only (${countrySetConfigs.americas.countries.length})`;
countrySetConfigs.australasia.scoreContext = `of ${countrySetConfigs.australasia.countries.length} Australasian UN countries`;
countrySetConfigs.australasia.menuLabel = `Australiasia UN only (${countrySetConfigs.australasia.countries.length})`;

const flagEmojiEl = document.getElementById("flag-emoji");
const flagStatusEl = document.getElementById("flag-status");
const flagCardEl = document.getElementById("flag-card");
const strikeEls = [...document.querySelectorAll("#strike-track .strike-pill")];
const optionsGridEl = document.getElementById("options-grid");
const scoreEl = document.getElementById("score");
const scoreContextEl = document.getElementById("score-context");
const pointsScoreEl = document.getElementById("points-score");
const roundTimerEl = document.getElementById("round-timer");
const highScoreEl = document.getElementById("high-score");
const fiftyButtonEl = document.getElementById("fifty-button");
const modeButtonEl = document.getElementById("mode-button");
const endGameButtonEl = document.getElementById("end-game-button");
const difficultyMenuEl = document.getElementById("difficulty-menu");
const difficultyMenuOptionsEl = document.getElementById("difficulty-menu-options");
const difficultyToggleEl = document.getElementById("difficulty-toggle");
const difficultyMenuCloseEl = document.getElementById("difficulty-menu-close");
const bonusToastEl = document.getElementById("bonus-toast");
const celebrationEl = document.getElementById("celebration");
const celebrationKickerEl = document.getElementById("celebration-kicker");
const celebrationTitleEl = document.getElementById("celebration-title");
const celebrationCopyEl = document.getElementById("celebration-copy");
const celebrationButtonEl = document.getElementById("celebration-button");

const state = {
  countrySetKey: "combined",
  optionCount: 20,
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
  startingHighScore: 0,
  strikes: 0,
  correctStreak: 0,
  isLocked: false,
  isDifficultyMenuOpen: false,
  isComplete: false,
  pendingGameOverReason: null,
  pendingNewBestGameOver: false,
  correct: 0,
  presented: 0
};

registerServiceWorker();
configureDifficultyMenu();
renderPoints();
resetGame("combined", 20);
modeButtonEl.addEventListener("click", openDifficultyMenu);
endGameButtonEl.addEventListener("click", () => resetGame(state.countrySetKey, state.optionCount));
difficultyMenuCloseEl.addEventListener("click", closeDifficultyMenu);
difficultyMenuEl.addEventListener("pointerdown", (event) => {
  if (event.target === difficultyMenuEl) {
    closeDifficultyMenu();
  }
});
celebrationButtonEl.addEventListener("click", () => {
  if (Date.now() < state.feedbackReadyAt) {
    return;
  }

  hideCelebration();
  if (state.pendingNewBestGameOver) {
    state.pendingNewBestGameOver = false;
    finishGame("strikes");
    return;
  }

  if (state.pendingGameOverReason) {
    const pendingReason = state.pendingGameOverReason;
    state.pendingGameOverReason = null;
    if (pendingReason === "strikes" && state.points > state.startingHighScore) {
      state.pendingNewBestGameOver = true;
      showNewBestCelebration();
      return;
    }
    finishGame(pendingReason);
    return;
  }

  if (state.isComplete) {
    return;
  }

  startRound();
});
window.addEventListener("resize", () => {
  window.requestAnimationFrame(() => {
    fitOptionText();
    fitControlText();
    if (state.isDifficultyMenuOpen) {
      fitDifficultyMenuText();
    }
  });
});

function resetGame(countrySetKey, optionCount = state.optionCount, keepMenuOpen = false) {
  stopRoundTimer();
  if (!keepMenuOpen) {
    closeDifficultyMenu();
  }
  state.countrySetKey = countrySetKey;
  state.optionCount = optionCount;
  state.deck = buildDeck(getCurrentCountries());
  state.correct = 0;
  state.presented = 0;
  state.points = 0;
  state.highScore = readHighScore();
  state.startingHighScore = state.highScore;
  state.strikes = 0;
  state.pendingGameOverReason = null;
  state.pendingNewBestGameOver = false;
  state.correctStreak = 0;
  state.streakElapsedMs = 0;
  state.resetTimerOnNextRound = false;
  state.isComplete = false;
  state.selectedCodes = new Set();
  endGameButtonEl.textContent = "New game";
  endGameButtonEl.classList.remove("new-game");
  modeButtonEl.disabled = false;
  fiftyButtonEl.disabled = true;
  updateDifficultyMenuButtons();
  updateDifficultyToggleButton();
  updateModeButtonLabel();
  renderPoints();
  renderStrikes();
  renderTimer(0);
  clearFlagEndState();
  preloadUpcomingFlags(24);
  startRound();
}

function buildDeck(sourceCountries) {
  return shuffleList(sourceCountries);
}

function configureDifficultyMenu() {
  [...difficultyMenuOptionsEl.querySelectorAll(".difficulty-option")].forEach((button) => {
    const countrySetKey = button.dataset.countrySet;
    const countrySet = countrySetConfigs[countrySetKey];
    if (!countrySet) {
      return;
    }

    button.textContent = countrySet.menuLabel;
    button.addEventListener("click", () => {
      resetGame(countrySetKey, state.optionCount);
    });
  });

  difficultyToggleEl.addEventListener("click", () => {
    resetGame(state.countrySetKey, state.optionCount === 20 ? 5 : 20, true);
  });
}

function updateDifficultyMenuButtons() {
  [...difficultyMenuOptionsEl.querySelectorAll(".difficulty-option")].forEach((button) => {
    button.classList.toggle("active", button.dataset.countrySet === state.countrySetKey);
  });
}

function updateDifficultyToggleButton() {
  difficultyToggleEl.textContent = state.optionCount === 20 ? "5 options only" : "All 20 options";
}

function updateModeButtonLabel() {
  const isChangedSelection = state.optionCount === 5 && state.countrySetKey !== "combined";
  modeButtonEl.textContent = isChangedSelection ? CHANGED_DIFFICULTY_LABEL : DEFAULT_DIFFICULTY_LABEL;
}

function openDifficultyMenu() {
  if (state.isComplete) {
    return;
  }

  state.isDifficultyMenuOpen = true;
  updateDifficultyMenuButtons();
  updateDifficultyToggleButton();
  difficultyMenuEl.classList.add("show");
  difficultyMenuEl.setAttribute("aria-hidden", "false");
  window.requestAnimationFrame(fitDifficultyMenuText);
}

function closeDifficultyMenu() {
  state.isDifficultyMenuOpen = false;
  difficultyMenuEl.classList.remove("show");
  difficultyMenuEl.setAttribute("aria-hidden", "true");
}

function fitDifficultyMenuText() {
  [difficultyToggleEl, ...difficultyMenuOptionsEl.querySelectorAll(".difficulty-option"), difficultyMenuCloseEl]
    .forEach((element) => {
      fitTextToBox(element, { minSize: 9, step: 0.5 });
    });
}

function startRound() {
  if (state.isComplete) {
    return;
  }

  const countrySet = getCurrentCountrySet();
  if (state.deck.length === 0) {
    finishGame("complete");
    return;
  }

  state.currentCountry = state.deck.pop();
  state.currentDuplicateGroup = getActiveDuplicateGroup(state.currentCountry);
  state.currentOptions = state.currentDuplicateGroup
    ? buildDuplicateOptions(state.currentDuplicateGroup)
    : buildOptions(state.currentCountry);
  state.isLocked = false;
  state.isComplete = false;
  state.selectedCodes = new Set();
  const isDuplicateRound = Boolean(state.currentDuplicateGroup);
  document.body.classList.toggle("duplicate-mode", isDuplicateRound);
  fiftyButtonEl.disabled = false;
  updateModeButtonLabel();
  scoreContextEl.textContent = countrySet.scoreContext;
  fitControlText();

  clearFlagEndState();
  renderFlagImage(state.currentCountry);
  renderOptions(state.currentOptions);
  renderScore();
  preloadUpcomingFlags(24);
  startRoundTimer();
}

function buildOptions(correctCountry) {
  const sourceCountries = getCurrentCountries();
  const blockedCodes = getLookalikeBlockedCodes(correctCountry.code);
  const distractorCount = state.optionCount - 1;
  const distractors = state.optionCount === 5
    ? buildNearbyDistractors(correctCountry, sourceCountries, blockedCodes, distractorCount)
    : shuffleList(sourceCountries.filter((country) => {
      return country.code !== correctCountry.code && !blockedCodes.has(country.code);
    })).slice(0, distractorCount);
  return [correctCountry, ...distractors]
    .sort((left, right) => left.name.localeCompare(right.name));
}

function buildDuplicateOptions(flagGroup) {
  const correctCodes = new Set(flagGroup.correct.map((country) => country.code));
  const sourceCountries = getCurrentCountries();
  const distractors = shuffleList(sourceCountries.filter((country) => !correctCodes.has(country.code)))
    .slice(0, Math.max(0, state.optionCount - flagGroup.correct.length));
  return [...flagGroup.correct, ...distractors]
    .sort((left, right) => left.name.localeCompare(right.name));
}

function buildNearbyDistractors(correctCountry, sourceCountries, blockedCodes, distractorCount) {
  const basePool = sourceCountries.filter((country) => {
    return country.code !== correctCountry.code && !blockedCodes.has(country.code);
  });
  const sameRegion = shuffleList(basePool.filter((country) => getRegionForCode(country.code) === getRegionForCode(correctCountry.code)));
  const fallbackPool = shuffleList(basePool.filter((country) => getRegionForCode(country.code) !== getRegionForCode(correctCountry.code)));
  const nearby = sameRegion.slice(0, distractorCount);

  if (nearby.length < distractorCount) {
    nearby.push(...fallbackPool.slice(0, distractorCount - nearby.length));
  }

  return nearby;
}

function getActiveDuplicateGroup(country) {
  return null;
}

function getCurrentCountrySet() {
  return countrySetConfigs[state.countrySetKey];
}

function getCurrentCountries() {
  return getCurrentCountrySet().countries;
}

function getRegionForCode(code) {
  return regionByCode.get(code) || "other";
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
  applyScoring(isCorrect, 10, roundMs);

  [...optionsGridEl.querySelectorAll(".option-button")].forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.textContent === state.currentCountry.name) {
      optionButton.classList.add("correct");
    }
  });

  if (!isCorrect) {
    button.classList.add("incorrect");
    state.strikes += 1;
    renderStrikes();
  }

  renderScore();
  showCelebration(isCorrect, country.name);
  if (!isCorrect && state.strikes >= 5) {
    state.pendingGameOverReason = "strikes";
  }
}

function useFiftyFifty() {
  return;
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

function showNewBestCelebration() {
  celebrationEl.classList.remove("wrong");
  celebrationKickerEl.textContent = "New Best";
  celebrationTitleEl.textContent = `${state.points} points`;
  celebrationCopyEl.textContent = "New high score before strike five.";
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

function renderStrikes() {
  strikeEls.forEach((strikeEl, index) => {
    strikeEl.classList.toggle("used", index < state.strikes);
  });
}

function finishGame(reason = "complete") {
  state.isLocked = true;
  state.isComplete = true;
  stopRoundTimer();
  updateHighScore();
  renderPoints();
  fiftyButtonEl.disabled = true;
  modeButtonEl.disabled = true;
  document.body.classList.remove("duplicate-mode");
  optionsGridEl.innerHTML = "";

  if (reason === "strikes") {
    flagCardEl.classList.add("game-over");
    flagStatusEl.textContent = "Game Over";
    flagStatusEl.setAttribute("aria-hidden", "false");
    flagEmojiEl.style.backgroundImage = "";
    flagEmojiEl.innerHTML = "";
    flagEmojiEl.textContent = "\u{1F62D}";
    flagEmojiEl.removeAttribute("aria-label");
    flagEmojiEl.removeAttribute("role");
    return;
  }

  flagCardEl.classList.add("complete");
  flagStatusEl.textContent = "Finished";
  flagStatusEl.setAttribute("aria-hidden", "false");
  flagEmojiEl.style.backgroundImage = "";
  flagEmojiEl.innerHTML = "";
  flagEmojiEl.textContent = "Done";
  flagEmojiEl.removeAttribute("aria-label");
  flagEmojiEl.removeAttribute("role");
  celebrationEl.classList.remove("wrong");
  celebrationKickerEl.textContent = "Complete";
  celebrationTitleEl.textContent = "Full Set Done";
  celebrationCopyEl.textContent = `You finished ${getCurrentCountrySet().scoreContext}.`;
  showFeedback();
}

function clearFlagEndState() {
  flagCardEl.classList.remove("game-over", "complete");
  flagStatusEl.textContent = "";
  flagStatusEl.setAttribute("aria-hidden", "true");
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
    localStorage.setItem(getHighScoreKey(), String(state.highScore));
  } catch {
    // Some private browsing modes can block localStorage writes.
  }
}

function readHighScore() {
  try {
    const storedScore = Number(localStorage.getItem(getHighScoreKey()));
    return Number.isFinite(storedScore) && storedScore > 0 ? storedScore : 0;
  } catch {
    return 0;
  }
}

function getHighScoreKey() {
  return `${HIGH_SCORE_PREFIX}:${state.countrySetKey}:${state.optionCount}`;
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

function preloadUpcomingFlags(count) {
  state.deck
    .slice(Math.max(0, state.deck.length - count))
    .forEach((country) => {
      preloadFlagImage(country.code);
    });
}

function preloadFlagImage(code) {
  const normalizedCode = code.toLowerCase();
  if (flagLoadStates.has(normalizedCode)) {
    return flagLoadStates.get(normalizedCode);
  }

  const image = new Image();
  const loadPromise = new Promise((resolve) => {
    image.addEventListener("load", () => resolve(true), { once: true });
    image.addEventListener("error", () => resolve(false), { once: true });
  });
  flagLoadStates.set(normalizedCode, loadPromise);
  image.src = getFlagUrl(code);
  return loadPromise;
}

function renderFlagImage(country) {
  flagEmojiEl.textContent = "";
  flagEmojiEl.innerHTML = "";
  flagEmojiEl.style.backgroundImage = `url("${getFlagUrl(country.code)}")`;
  flagEmojiEl.setAttribute("role", "img");
  flagEmojiEl.setAttribute("aria-label", `${country.name} flag`);

  preloadFlagImage(country.code).then((loaded) => {
    if (state.currentCountry !== country || loaded) {
      return;
    }

    flagEmojiEl.style.backgroundImage = "";
    flagEmojiEl.innerHTML = "";
    flagEmojiEl.textContent = countryCodeToFlag(country.code);
  });
}

function getFlagUrl(code) {
  return `https://flagcdn.com/${code.toLowerCase()}.svg`;
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
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
      .then(() => caches.keys())
      .then((keys) => Promise.all(
        keys.filter((key) => key.startsWith("flag-game-pwa-")).map((key) => caches.delete(key))
      ))
      .then(() => {
        if (sessionStorage.getItem("flagGameCacheCleared") === APP_VERSION) {
          return;
        }

        sessionStorage.setItem("flagGameCacheCleared", APP_VERSION);
        window.location.replace(`./index.html?app-version=${APP_VERSION}`);
      })
      .catch(() => {});
  });
}
