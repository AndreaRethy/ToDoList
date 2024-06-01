// Declare variables
let itemsArray: string[] = [];

/* ---- FRONT END ---- */
// //Declare DOM elements - Comment out before running tests
// const inputField = document.querySelector('#new-item-field') /*as HTMLInputElement*/;
// const addButton = document.querySelector('#add-new') /*as HTMLElement*/;
// const removeAll = document.querySelector('#clear-all') /*as HTMLElement*/;
// const list = document.querySelector('#to-do-list') /*as HTMLElement*/;

// //LISTENERS - Comment out before running tests
// addButton.addEventListener('click', () => {
//     const newItem = inputField.value;
//     addNewItem(itemsArray, newItem);
//     renderItems();
// });

// removeAll.addEventListener('click', () => {
//     clearList(itemsArray);
//     list.innerHTML = "";
// });


// //Funtions for frontend
// function renderItems() {
//     inputField.value = "";
    // list.innerHTML = "";
    // itemsArray.forEach((item) =>{
    //     list.innerHTML += `<li>${item}</li>`
    // });
    // addListener();
// }

//function addListener() {
//     const listItems = document.querySelectorAll('#to-do-list li');
//     listItems.forEach(item => {
//         item.addEventListener('click', () => {
//         if (item.classList.contains('done')){
//              removeSelected(itemsArray, item.innerText);
//              renderItems();
//         } else {
//             item.classList.toggle('done');
//         }
//         });
//     });
//  }

/* ./FRONT END */


// FUNCTIONS
function addNewItem(array: string[], newItem: string) {
    array.push(newItem);
    console.log(array);
}

function clearList(array: string[]) {
    array.length = 0;
    console.log(array);
}

function removeSelected(array: string[], selectedItem: string): number {
    let index: number = array.findIndex(item => item === selectedItem)
    if (index > -1) {
        array.splice(index, 1);
    }
    return index;
}

export {addNewItem, clearList, removeSelected};