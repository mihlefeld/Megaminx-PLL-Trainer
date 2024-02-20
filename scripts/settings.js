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
    'colors': defaultColors[getColorScheme()],
    'showDots': false
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


function clip(x, l, h) {
    return Math.min(Math.max(x, l), h);
}

function computeButtonText() {
    var body = document.getElementById('bodyid');
    var minDiff = 30;
    var textColor = new Color(currentSettings.colors['--text']);
    var backgroundColor = new Color(currentSettings.colors['--background']);
    var primaryColor = new Color(currentSettings.colors['--primary']);
    var secondaryColor = new Color(currentSettings.colors['--secondary']);
    var accentColor = new Color(currentSettings.colors['--accent']);
    var diffBack = Math.abs(backgroundColor.lch.l - primaryColor.lch.l);
    var diffText = Math.abs(textColor.lch.l - primaryColor.lch.l);
    var buttonText = diffBack > diffText ? 'var(--background)' : "var(--text)";
    var secondaryText = Math.abs(backgroundColor.lch.l - secondaryColor.lch.l) > Math.abs(textColor.lch.l - secondaryColor.lch.l) ? "var(--background)" : "var(--text)";
    var accentText = Math.abs(backgroundColor.lch.l - accentColor.lch.l) > Math.abs(textColor.lch.l - accentColor.lch.l) ? "var(--background)" : "var(--text)";
    document.getElementById('--secondary').style.color = secondaryText.toString();
    document.getElementById('--accent').style.color = accentText.toString();
    body.style.setProperty('--buttonText', buttonText);

    var diffBackSec = Math.abs(backgroundColor.lch.l - secondaryColor.lch.l);
    if (diffBackSec < minDiff) {
        var sign = Math.sign(backgroundColor.lch.l - secondaryColor.lch.l);
        if (sign == 0) sign = 1;
        var new_l = backgroundColor.lch.l - sign * minDiff;
        if (new_l > 100 || new_l < 0) {
            new_l += sign * minDiff * 2;
        }
        secondaryColor.lch.l = new_l;
    }
    body.style.setProperty('--linkText', secondaryColor.toString());


    secondaryColor.lch.l = clip(secondaryColor.lch.l + (backgroundColor.lch.l < secondaryColor.lch.l ? 10 : -10), 0, 100);
    body.style.setProperty('--linkTextHover', secondaryColor.toString());
    primaryColor.lch.l = clip(primaryColor.lch.l + (backgroundColor.lch.l < primaryColor.lch.l ? 10 : -10), 0, 100);
    body.style.setProperty('--primaryHover', primaryColor.toString());
}

function applySettings() {
    var body = document.getElementById('bodyid');
    document.getElementById('timer').style.fontSize = currentSettings['timerSize'] + "em";
    document.getElementById('scramble').style.fontSize = currentSettings['scrambleSize'] + "em";
    document.getElementById('bodyid').style.fontSize = currentSettings['baseSize'] + "em";
    document.getElementById("weighted_choice_on_off").checked = currentSettings['weightedChoice'];
    document.getElementById("dots_toggle").checked = currentSettings['showDots'];
    for (const [key, color] of Object.entries(currentSettings['colors'])) {
        document.getElementById(key).value = color;
        body.style.setProperty(key, color);
    }
    computeButtonText();
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
    computeButtonText();
    saveSettings();
}

function resetStyle(dark) {
    var body = document.getElementById('bodyid');
    Object.assign(currentSettings['colors'], defaultColors[dark]);
    for (const [key, value] of Object.entries(currentSettings['colors'])) {
        document.getElementById(key).value = value;
        body.style.setProperty(key, value);
    }
    computeButtonText();
    saveSettings();
}

function toggleWeightedChoice(element) {
    currentSettings['weightedChoice'] = !currentSettings["weightedChoice"];
    element.checked = currentSettings['weightedChoice'];
    saveSettings();
}

function toggleDots(element) {
    currentSettings['showDots'] = !currentSettings["showDots"];
    element.checked = currentSettings['showDots'];
    saveSettings();
    renderSelection();
}

function decideShowDotToggle() {
    if (window.history.state == 'select' && optionalAlgsCount != 0) {
        document.getElementById("dots_toggle_entry").style.display = 'flex';
    } else {
        document.getElementById("dots_toggle_entry").style.display = 'none';
    }
}