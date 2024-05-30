"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declare DOM elements - Comment out before running tests
const inputField = document.querySelector('#new-item-field');
const addButton = document.querySelector('#add-new');
const removeAll = document.querySelector('#clear-all');
const list = document.querySelector('#to-do-list');
// Declare variables
let itemsArray = [];
// LISTENERS - Comment out before running tests
addButton.addEventListener('click', () => {
    const newItem = inputField.value;
    addNewItem(itemsArray, newItem);
    list.innerHTML += `<li>
        <p>${newItem}</p>
        
    </li>`;
});
// FUNCTIONS
function addNewItem(array, newItem) {
    array.push(newItem);
    console.log(array);
}
function clearList(array) {
    array = [];
    console.log(array);
}
exports.default = addNewItem;
