window.onload = function onLoadFunction() {
    addRowFunction();
};

function addRowFunction() {

    let minRow = 1;
    let maxRow = 5;

    let textValue = document.getElementById("areaA").value;
  
    let textLenghtArray = [45, 54, 63, 72, 81];
 
    for (let i = 0; i < textLenghtArray.length; i++) {
        if (textValue.length > textLenghtArray[i]) {
            maxRow += minRow;
        }   
    }

    if (textValue.length > 90) {
        document.getElementById('areaA').style.overflow = 'visible';
    } else {
        document.getElementById('areaA').style.overflow = 'hidden';
    }

    document.getElementById("areaA").rows = maxRow;
}
