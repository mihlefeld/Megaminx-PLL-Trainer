var defaultColors = {
    'light': {
        '--text': "oklch(25% 0 0)",
        '--background': "oklch(96% 0.01 97)",
        '--primary': "oklch(75% 0.09 99)",
        '--secondary': "oklch(45% 0.08 136)",
        '--accent': "oklch(85% 0.16 98)"
    },
    "dark": {
        '--text': "oklch(99% 0 91)",
        '--background': "oklch(33% 0.0 0)",
        '--primary': "oklch(69% 0.09 98)",
        '--secondary': "oklch(82% 0.07 135)", 
        '--accent': "oklch(91% 0.16 98)"
    }  
}
var defaultSettings = {
    'baseSize': isMobile() ? 2.5 : 1.3,
    'timerSize': 5.0,
    'scrambleSize': 2,
    'weightedChoice': true,
    'colors': {},
    'showDots': false
};

var currentSettings = {};
Object.assign(currentSettings, defaultSettings);
Object.assign(currentSettings['colors'], defaultColors[getColorScheme()]);


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

function toSrgb(color) {
    return color.toGamut({'space': 'sRGB'});
}

function toOklchStr(color) {
    var s = 'oklch(';
    s += Math.round(100 * color.oklch.l) + '% ';
    s += Math.round(100 * color.oklch.c) / 100 + ' ';
    var h = Number.isNaN(color.oklch.h) ? 0 : color.oklch.h;
    s += Math.round(h) + ')'
    return s;
}


function computeColors() {
    var body = document.getElementById('bodyid');
    var contrastAlg = 'WCAG21';
    var minContrast = 3;
    var textColor = toSrgb(new Color(currentSettings.colors['--text']));
    var backgroundColor = toSrgb(new Color(currentSettings.colors['--background']));
    var primaryColor = toSrgb(new Color(currentSettings.colors['--primary']));
    var secondaryColor = toSrgb(new Color(currentSettings.colors['--secondary']));
    var accentColor = toSrgb(new Color(currentSettings.colors['--accent']));
    currentSettings.colors['--text'] = toOklchStr(textColor);
    currentSettings.colors['--background'] = toOklchStr(backgroundColor);
    currentSettings.colors['--primary'] = toOklchStr(primaryColor);
    currentSettings.colors['--secondary'] = toOklchStr(secondaryColor);
    currentSettings.colors['--accent'] = toOklchStr(accentColor);
    for (const [key, color] of Object.entries(currentSettings['colors'])) {
        document.getElementById(key).value = color;
        body.style.setProperty(key, color);
    }

    var contrastBackText = backgroundColor.contrast(textColor, contrastAlg);
    var contrastBackPrimary = backgroundColor.contrast(primaryColor, contrastAlg);
    var contrastBackSecondary = backgroundColor.contrast(secondaryColor, contrastAlg);
    var contrastBackAccent = backgroundColor.contrast(accentColor, contrastAlg);
    var contrastTextPrimary = textColor.contrast(primaryColor, contrastAlg);
    var contrastTextSecondary = textColor.contrast(secondaryColor, contrastAlg);
    var contrastTextAccent = textColor.contrast(accentColor, contrastAlg);
    var buttonText = contrastBackPrimary > contrastTextPrimary ? 'var(--background)' : "var(--text)";
    var secondaryText = contrastBackSecondary > contrastTextSecondary ? "var(--background)" : "var(--text)";
    var accentText = contrastBackAccent > contrastTextAccent ? "var(--background)" : "var(--text)";
    document.getElementById('--secondary').style.color = secondaryText;
    document.getElementById('--accent').style.color = accentText;
    body.style.setProperty('--buttonText', buttonText);
    body.style.setProperty('--accentText', accentText);

    if (contrastBackSecondary < minContrast) {
        var sign = secondaryColor.oklch.l > backgroundColor.oklch.l ? 1 : -1;
        secondaryColor.oklch.l += sign * 0.3;
    }
    body.style.setProperty('--linkText', toOklchStr(secondaryColor));
    secondaryColor.oklch.l += backgroundColor.oklch.l > secondaryColor.oklch.l ? 0.1 : -0.1;
    body.style.setProperty('--linkTextHover', toOklchStr(secondaryColor));
    primaryColor.oklch.l += backgroundColor.oklch.l > primaryColor.oklch.l ? 0.1 : -0.1;
    body.style.setProperty('--primaryHover', toOklchStr(primaryColor));
    accentColor.oklch.l += backgroundColor.oklch.l > accentColor.oklch.l ? 0.1 : -0.1;
    body.style.setProperty('--accentHover', toOklchStr(accentColor));
    backgroundColor.oklch.l += backgroundColor.oklch.l < textColor.oklch.l ? -0.1 : 0.1;
    body.style.setProperty('--background2', toOklchStr(backgroundColor));
    document.getElementById('timer').style.color = toOklchStr(textColor);
}

function applySettings() {
    document.getElementById('timer').style.fontSize = currentSettings['timerSize'] + "em";
    document.getElementById('scramble').style.fontSize = currentSettings['scrambleSize'] + "em";
    document.getElementById('bodyid').style.fontSize = currentSettings['baseSize'] + "em";
    document.getElementById("weighted_choice_on_off").checked = currentSettings['weightedChoice'];
    document.getElementById("dots_toggle").checked = currentSettings['showDots'];
    computeColors();
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
    computeColors();
    saveSettings();
}

function resetStyle(dark) {
    var body = document.getElementById('bodyid');
    Object.assign(currentSettings['colors'], defaultColors[dark]);
    for (const [key, value] of Object.entries(currentSettings['colors'])) {
        document.getElementById(key).value = value;
        body.style.setProperty(key, value);
    }
    computeColors();
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