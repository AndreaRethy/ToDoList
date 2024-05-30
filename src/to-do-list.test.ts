// Test for adding new items
import { addNewItem, clearList }  from './to-do-list';



test('Adding new items to existing array', () => {
    let itemsArray: string[] = [];
    addNewItem(itemsArray, 'bread')

    expect(itemsArray).toContain('bread');
});

test('remove all items at once', () => {
    let itemsArray: string[] = ['buy groceries', 'clean kitchen', 'feed the cat'];

    clearList(itemsArray);

    expect(itemsArray.length).toBe(0);
});