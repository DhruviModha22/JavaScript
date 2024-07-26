function getText() {
    return document.getElementById("inputText").value;
}

function setText(newText) {
    document.getElementById("inputText").value = newText;
    updatePreview();
}

function updatePreview() {
    document.getElementById("preview").innerText = getText();
}

function countWords() {
    let text = getText().trim();  
    let wordCount = text === "" ? 0 : text.split(/\s+/).length;
    alert("Word Count: " + wordCount);
}

function countChars() {
    let charCount = getText().length;
    alert("Character Count: " + charCount);
}

function toUpperCase() {
    setText(getText().toUpperCase());
}

function toLowerCase() {
    setText(getText().toLowerCase());
}

function clearText() {
    setText("");
}

function copyText() {
    let textArea = document.getElementById("inputText");
    textArea.select();
    document.execCommand("copy");
    alert("Text copied to clipboard");
}

// function removeExtraSpaces() {
//     let text = getText().replace(/\s+/g, ' ').trim();
//     setText(text);
// }

document.getElementById("inputText").addEventListener("input", updatePreview);