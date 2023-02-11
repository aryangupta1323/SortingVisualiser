function swap(el1,el2){
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// sorting button enable and disable

function disableSort(){
    document.getElementById('i').disabled=true
    document.getElementById('m').disabled=true
    document.getElementById('b').disabled=true
    document.getElementById('s').disabled=true
    document.getElementById('q').disabled=true
}

function enableSort(){
    document.getElementById('i').disabled=false
    document.getElementById('m').disabled=false
    document.getElementById('b').disabled=false
    document.getElementById('s').disabled=false
    document.getElementById('q').disabled=false
}

// new array button enable disable
function new_arrayDisable(){
    document.getElementById('new_array').disabled=true
}
function new_arrayEnable(){
    document.getElementById('new_array').disabled=false
}

// size slider enable disable
function disableSizeSlider(){
    document.getElementById('noBars').disabled = true;
}
function enableSizeSlider(){
    document.getElementById('noBars').disabled = false;
}

function algoStart(){
    disableSizeSlider()
    disableSort()
    new_arrayDisable()
}

function algoEnd(){
    enableSizeSlider()
    enableSort()
    new_arrayEnable()
}