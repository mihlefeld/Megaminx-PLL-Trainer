/// \param m = mode: 0 = selection, 1 = practicing, 2 = recap
function changeMode(m)
{
    var pr = document.getElementsByClassName("practice_layout");
    for (var i = 0; i < pr.length; i++)
        pr[i].style.display = (m != 0) ? 'initial' : 'none';

    var se = document.getElementsByClassName("selection_layout");
    for (var i = 0; i < se.length; i++)
        se[i].style.display = (m == 0) ? 'initial' : 'none';

    if (m == 2) {
        // recap
        var casesAmount = window.selCases.length;
        window.recapArray = window.selCases.slice();

        showScramble();
    }
    else if (m == 1) {
        // practice
        recapArray = [];
        var casesAmount = window.selCases.length;
        showScramble();
    }
    else if (m == 0) {
        // select
        recapArray = [];
        renderSelection();
    }
}

/// \returns random integer from 0 to h
function randomNum(h) {
    return Math.floor(Math.random() * h);
}

// binary search, from https://stackoverflow.com/questions/69335458/weighted-probability-random-choice-array
function find(arr, x , start=0, end=arr.length) {
    if(end < start) return -1;
    else if(end == start) return end;
    const mid = Math.floor((start + end) / 2);  
    if(arr[mid] === x) return mid+1;
    else if(arr[mid] < x) return find(arr, x, mid+1, end);
    else
      return find(arr, x, start, mid);
}

// weighted random choice from array "items". weights has to be the same length as items and weights have to be cumulative
// weights do not have to be normalized
function weightedRandomElement(items, weights) {
    return items[find(weights, Math.random()*weights[weights.length-1])];
};
