// Test for adding new items
import addNewItem  from './to-do-list';



test('Adding new items to existing array', () => {
    let itemsArray: string[] = [];
    addNewItem(itemsArray, 'bread')

    expect(itemsArray).toContain('bread');
});