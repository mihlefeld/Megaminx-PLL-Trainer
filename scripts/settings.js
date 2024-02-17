var defaultColors = {
    'dark': {
        '--text': "#f3f1e7",
        '--background': "#222222",
        '--primary': "#a59855",
        '--secondary': "#405e31",
        '--accent': "#ffe252"
    },
    "light": {
        '--text': "#18160c",
        '--background': "#fbfaf7",
        '--primary': "#aa9c59",
        '--secondary': "#b1cfa2",
        '--accent': "#ffe252"
    }
}
var defaultSettings = {
    'baseSize': isMobile() ? 2.5 : 1.3,
    'timerSize': 5.0,
    'scrambleSize': 2,
    'weightedChoice': true,
    'colors': defaultColors[getColorScheme()]
};

var currentSettings = defaultSettings;

function loadSettings() {
    var loaded = localStorage.getItem('settings');
    if (loaded != null) {    
        currentSettings = JSON.parse(localStorage.getItem('settings'));
    };
}

function saveSettings() {
    localStorage.setItem('settings', JSON.stringify(currentSettings));
}

function applySettings() {
    var body = document.getElementById('bodyid');
    document.getElementById('timer').style.fontSize = currentSettings['timerSize'] + "em";
    document.getElementById('scramble').style.fontSize = currentSettings['scrambleSize'] + "em";
    document.getElementById('bodyid').style.fontSize = currentSettings['baseSize'] + "em";
    document.getElementById("weighted_choice_on_off").checked = currentSettings['weightedChoice'];
    for (const [key, color] of Object.entries(currentSettings['colors'])) {
        document.getElementById(key).value = color;
        body.style.setProperty(key, color);
    }
}


function adjustSize(item, inc) {
    if (item == 'timer') {
        currentSettings['timerSize'] += inc;
        document.getElementById('timer').style.fontSize = currentSettings['timerSize'] + "em";
    }

    if (item == 'scramble') {
        currentSettings['scrambleSize'] += inc;
        document.getElementById('scramble').style.fontSize = currentSettings['scrambleSize'] + "em";
    }
    if (item == 'body') {
        currentSettings['baseSize'] += inc
        document.getElementById('bodyid').style.fontSize = currentSettings['baseSize'] + "em";
    }
    saveSettings();
}

function changeColor(event) {
    var newColor = event.target.value;
    var id = event.target.id;
    currentSettings['colors'][id] = newColor;
    document.getElementById('bodyid').style.setProperty(id, newColor);
    saveSettings();
}

function resetStyle(dark) {
    var body = document.getElementById('bodyid');
    currentSettings['colors'] = defaultColors[dark];
    for (const [key, value] of Object.entries(currentSettings['colors'])) {
        document.getElementById(key).value = value;
        body.style.setProperty(key, value);
    }
    saveSettings();
}

function toggleWeightedChoice(element) {
    currentSettings['weightedChoice'] = !currentSettings["weightedChoice"];
    element.checked = currentSettings['weightedChoice'];
    saveSettings();
}