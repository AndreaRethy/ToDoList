"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Test for adding new items
const to_do_list_1 = __importDefault(require("./to-do-list"));
test('Adding new items to existing array', () => {
    let itemsArray = [];
    (0, to_do_list_1.default)(itemsArray, 'bread');
    expect(itemsArray).toContain('bread');
});
