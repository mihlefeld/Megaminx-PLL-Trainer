
// load selected cases
loadSelection();
renderSelection();

function updateTitle() {
    document.getElementById("csi").innerHTML = window.selCases.length;
}
function itemClicked(i) {
    if (window.scramblesMap[i] == null) {
        console.error("is null");
        return;
    }

    var index = window.selCases.indexOf(i);
    var wasSelected = (index != -1);
    if (wasSelected)
        window.selCases.splice(index, 1);
    else
        window.selCases.push(i);

    document.getElementById("itemTd" + i).className = (wasSelected ? "itemUnsel" : "itemSel") + " borderedContainer" ;
    saveSelection();
    updateTitle();
}

function selectAllNone() {
    var nothingSelected = (window.selCases.length == 0);
    if (nothingSelected) {
        for (var i = 1; i <= Object.keys(scramblesMap).length; ++i)
            window.selCases.push(i);
    } else {
        window.selCases = [];
    }
    renderSelection();
    saveSelection();
}

/// \returns true if at least one case selected in group groupName
function isAtLeastOneSelected(groupName) {
    var indeces = algsGroups[groupName];
    for (var i in indeces) {
        if (selCases.indexOf(indeces[i]) != -1)
            return true;
    }
    return false;
}

// select or deselect all cases in the group
function selectCaseGroup(name) {
    var aos = isAtLeastOneSelected(name);
    var indeces = algsGroups[name];
    for (i in indeces) {
        if (aos) { // need to delete
            var j = window.selCases.indexOf(indeces[i]);
            if (j != -1)
                window.selCases.splice(j, 1);
        } else { // need to add
            window.selCases.push(indeces[i]);
        }
    }
    renderSelection();
    saveSelection();
}

function makeDivNormal(groupname) {
    var s = "<div class='colFlex' style='width: fit-content'>";
    var indeces = algsGroups[groupname];
    s += "<div class='borderedContainer itemUnsel pad' onclick='selectCaseGroup(\""+groupname
        +"\")'><b>" + groupname + "</b></div>";
    s += "<div class='rowFlex' style='flex-wrap: wrap'>";
    for (var j = 0; j < indeces.length; j++) {
        var i = indeces[j]; // case number
        var sel = (window.selCases.indexOf(i) != -1);
        s += "<div id='itemTd"+i+"' onclick='itemClicked("+i+")' class='borderedContainer "+(sel?"itemSel":"itemUnsel")+"' title='"+algsInfo[i]["name"]+"'>"+
        //"<img width='100px' id='sel"+i+"' src='pic/"+i+".png' > <br>case #"+i+"</div>";
        "<img class='caseImage' id='sel"+i+"' src='pic/"+i+".png' ></div>";
    }
    s += "</div></div>";
    return s;
}


/// iterates the scramblesMap and highlights HTML elements according to the selection
function renderSelection()
{
    var s="";
    s += "<div><div class='borderedContainer itemUnsel pad' style='width: 100%' onclick='selectAllNone()'><b>All Cases (" + Object.keys(scramblesMap).length + ")</b> | selected: <span id='csi'></span></div></div>";

    for (const key of Object.keys(algsGroups)) {
        s += makeDivNormal(key)
    }

    document.getElementById("cases_selection").innerHTML = s;
    updateTitle();
}
