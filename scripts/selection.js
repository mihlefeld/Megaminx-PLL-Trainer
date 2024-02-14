
// load selected cases
loadSelection();
renderSelection();

function updateTitle() {
    document.getElementById("csi").innerHTML = window.selCases.length;
}
function itemClicked(i) {
    if (window.pllMap[i] == null) {
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
        for (var i = 1; i <= 152; ++i)
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
function selectPllGroup(name) {
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
    s += "<div class='borderedContainer itemUnsel pad' onclick='selectPllGroup(\""+groupname
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


/// iterates the pllMap and highlights HTML elements according to the selection
function renderSelection()
{
    var s="";
    s += "<div><div class='borderedContainer itemUnsel pad' onclick='selectAllNone()' colspan='6'><b>All Cases (152)</b> | selected: <span id='csi'></span></div></div>";

    s += makeDivNormal("Group A");
    s += makeDivNormal("Group B");
    s += makeDivNormal("Group C");
    s += makeDivNormal("Group D");
    s += makeDivNormal("Group E");
    s += makeDivNormal("Group F");
    s += makeDivNormal("Group G");
    s += makeDivNormal("Group H");
    s += makeDivNormal("Group I");
    s += makeDivNormal("Group J");
    s += makeDivNormal("Group K");
    s += makeDivNormal("Group L");
    s += makeDivNormal("Group M");
    s += makeDivNormal("Group N");
    s += makeDivNormal("Group O");
    s += makeDivNormal("Group P");
    s += makeDivNormal("Group Q");
    s += makeDivNormal("Group R");
    s += makeDivNormal("Group S");
    s += makeDivNormal("Group T");
    s += makeDivNormal("Group U");
    s += makeDivNormal("Group V");
    s += makeDivNormal("Group W");
    s += makeDivNormal("Group X");
    s += makeDivNormal("Group Y");
    s += makeDivNormal("Group Z");


    document.getElementById("cases_selection").innerHTML = s;
    updateTitle();
}
