// Declare variables
let itemsArray: string[][] = [];

// FUNCTIONS
function addNewItem(array: string[][], newItem: string) {
    array.push([newItem]);
    console.log(array);
}

function clearList(array: string[][]) {
    array.length = 0;
    console.log(array);
}

function markDone(array: string[][], selectedItem: string): number {
    let index: number = array.findIndex(item => item[0] === selectedItem)
    if (index > -1) {
        array[index].push('done')
    }
    return index;
}

function removeSelected(array: string[][], selectedItem: string): number {
    let index: number = array.findIndex(item => item[0] === selectedItem)
    if (index > -1) {
        array.splice(index, 1);
    }
    return index;
}

export {addNewItem, clearList, removeSelected, markDone};