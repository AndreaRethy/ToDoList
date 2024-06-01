// Test for adding new items
import { addNewItem, clearList, removeSelected }  from './to-do-list';


// TEST 1 - Addition of new item
test('Adding new items to existing array', () => {
    let itemsArray: string[] = [];
    addNewItem(itemsArray, 'bread')

    expect(itemsArray).toContain('bread');
});

// TEST 2 - Remove all items
test('remove all items at once', () => {
    let itemsArray: string[] = ['buy groceries', 'clean kitchen', 'feed the cat', 'finish homework'];

    clearList(itemsArray);

    expect(itemsArray.length).toBe(0);
});

// TEST 3 - Remove individual items
test('remove selected item', () => {
    let itemsArray: string[] = ['buy groceries', 'clean kitchen', 'feed the cat', 'finish homework'];
    let selected: string = 'buy groceries'

    removeSelected(itemsArray, selected);

    expect(itemsArray).not.toContain(selected);
});