// Test for adding new items
import addNewItem  from './to-do-list';

test('Adding new items', () => {
    let itemsArray: string[] = [];
    const newItem = 'Buy Bread';

    addNewItem(itemsArray, newItem);

    expect(itemsArray).toContain(newItem);
});