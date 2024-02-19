var baseUrl;
function main() {
    loadSettings();
    applySettings();
    timer = document.getElementById('timer');
    timer.innerHTML = "ready";
    var initialMode = 0;

    var splitUrl = window.location.href.split('?');
    baseUrl = splitUrl[0];
    if (splitUrl.length > 1 && splitUrl[1] == 'train') {
        initialMode = 1;
    }
    if (splitUrl.length > 1 && splitUrl[1] == 'recap') {
        initialMode = 2;
    }

    window.addEventListener('popstate', (event) => {
        changeMode(0);
    })

    /// handles keypup and keydown events. Starts timer etc.
    document.getElementById("bodyid").addEventListener("keydown", function (event) {
        // delete hotkey - remove last
        if (event.code == "Delete" && !running) {
            if (!!event.shiftKey)
                confirmClear();
            else
                confirmRemLast();
            return;
        }

        if (event.code == "KeyH" && !running) {
            showHint(null, window.lastCase);
        }

        if (!allowed || !window.allowStartingTimer)
            return; // preventing auto-repeat and empty scrambles
        if (event.code != "ShiftLeft") // shift
            allowed = false;

        if (running) {
            // stop timer on any button
            timerStop();
            return;
        }
        else if (event.code == "Space") {
            timerSetReady();
            return;
        }
    });

    /// keyup event for starting the timer
    document.getElementById("bodyid").addEventListener("keyup", function (event) {
        allowed = true;
        if (!window.allowStartingTimer)
            return; // preventing auto-repeat
        if (!running && !waiting && (event.keyCode == timerActivatingButton)) {
            timerStart();
        }
        else {
            timerAfterStop();
        }
    });

    timerDiv = document.getElementById("timerDiv")
    timerDiv.addEventListener("touchstart", handleTouchStart, false);
    timerDiv.addEventListener("touchend", handleTouchEnd, false);
    window.addEventListener('keydown', function (e) {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
        }
    });

    loadSelection();
    displayStats();
    changeMode(initialMode);
    document.getElementById('bodyid').style.display = "flex";
}

main();