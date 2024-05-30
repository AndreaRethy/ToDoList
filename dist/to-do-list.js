"use strict";
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
    list.innerHTML += `<li>${newItem}</li>`;
    const listItems = document.querySelectorAll('#to-do-list li');
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('done');
        });
    });
});
removeAll.addEventListener('click', () => {
    clearList(itemsArray);
    list.innerHTML = "";
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
// export default addNewItem;
