

// Declare DOM elements - Comment out before running tests
const inputField = document.querySelector('#new-item-field') as HTMLInputElement;
const addButton = document.querySelector('#add-new') as HTMLElement;
const removeAll = document.querySelector('#clear-all') as HTMLElement;
const list = document.querySelector('#to-do-list') as HTMLElement;

// Declare variables
let itemsArray: string[] = [];



// LISTENERS - Comment out before running tests
addButton.addEventListener('click', () => {
    const newItem = inputField.value;
    addNewItem(itemsArray, newItem);
});


// FUNCTIONS
function addNewItem(array: string[] , newItem: string) {
    array.push(newItem);
    console.log(array);
}



export default addNewItem;
