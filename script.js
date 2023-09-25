// Variables
var textData

// Function that gets called when you load a website
function refreshText(){
    // Call functio that updates big text to text from check box
    updateText()
    // Recall this function after 50ms
    setTimeout(refreshText, 50)
}

// Function that updates text
function updateText() {
    // Getting text from textbox and storing it in variable textData
    textData = document.getElementById("textInput").value;
    // Setting text from textbox to big text
    document.getElementById("BigText").innerText = textData;
}