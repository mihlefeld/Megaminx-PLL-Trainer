function main() {
    loadSettings();
    applySettings();
    timer = document.getElementById('timer');
    timer.innerHTML = "ready";

    /// handles keypup and keydown events. Starts timer etc.
    document.getElementById("bodyid").addEventListener("keydown", function (event) {
        // delete hotkey - remove last
        if (event.keyCode == 46 && !running) {
            if (!!window.event.shiftKey)
                confirmClear();
            else
                confirmRemLast();
            return;
        }

        if (!allowed || !window.allowStartingTimer)
            return; // preventing auto-repeat and empty scrambles

        if (event.keyCode != 16) // shift
            allowed = false;

        if (running) {
            // stop timer on any button
            timerStop();
            return;
        }
        else if (event.keyCode == timerActivatingButton) {
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
    changeMode(0);
    document.getElementById('bodyid').style.display = "flex";
}

main();