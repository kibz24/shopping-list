const groceryList = document.getElementById("groceryList");
const removeList = document.getElementById("removeList");
const addList = document.getElementById("addList");
const userInput = document.getElementById("userInput");

addList.addEventListener('click', function() {
    var paragraph = document.createElement("p");
    groceryList.appendChild(paragraph)
    paragraph.innerText = "-" + userInput.value;
    userInput.value = "";

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    removeList.addEventListener('click', function() {
        groceryList.removeChild(paragraph)
    })
})