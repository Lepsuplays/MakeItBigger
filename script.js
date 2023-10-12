// Event listener that calls update text function when text in textbox changes
document.getElementById("textInput").addEventListener("input", updateText);

// Function that updates text
function updateText() {
    // Getting text from textbox and storing it in variable textData
    textData = document.getElementById("textInput").value;
    // Setting text from textbox to big text
    document.getElementById("BigText").innerText = textData;
}