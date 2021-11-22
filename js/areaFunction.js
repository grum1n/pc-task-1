window.onload = function onLoadFunction() {
    addRowFunction();
};

function addRowFunction() {

    let minRow = 1;
    let maxRow = 5;

    let textValue = document.getElementById("areaA").value;
  
    let textLenghtArray = [49, 59, 69, 79, 89];
 
    for (let i = 0; i < textLenghtArray.length; i++) {
        if (textValue.length > textLenghtArray[i]) {
            maxRow += minRow;
        }   
    }

    if (textValue.length > 99) {
        document.getElementById('areaA').style.overflow = 'visible';
    } else {
        document.getElementById('areaA').style.overflow = 'hidden';
    }

    document.getElementById("areaA").rows = maxRow;
}
