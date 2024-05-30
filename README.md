# Andrea Réthy - Entrega 1.1: To Do List

## Introduction

    The goal of this exercise is to create a to-do list application using TypeScript and TDD. The application must have the following characteristics:

- Allow adding a task to the list.
- Allow marking a task as completed.
- Allow to remove a task from the list.
- Show the list of tasks.

Use tests to test the app's functionality.

Create a CLI to test the application's functionality.

Create a front-end to test the application's functionality


### Front-end planning:

    - Add a text field and a button for adding new items

    - Add a button to clear all at once

    - Previously added items to be loaded as list items of an unordered list. Inside the list items use input:checkbox for allowing to mark the items as completed.

    - On the right side of the items use an 'X' symbol for allowing to delete the item.


### Back-end planning:

    - Create an empty array for the items to be showed

    - Every time the user adds a new item use .push to add the new item to the array

    - In the same function add new item to the DOM

    - Disable the option to use <> or {} or [] characters for security

    - When the user selects clear all make to-do-list innerHTML empty

    - When user selects items one by one to delete use .splice to remove the item from the array

    - Reload the to-do-list

## Project Setup

Node version v20.12.2

### devDependencies:

@types/jest: ^29.5.12

jest: ^29.7.0

ts-jest: ^29.1.4

ts-node: ^10.9.2

typescript: ^5.4.5

### How to run the program in Browser (from Mac)

```
open index.html
```

#### ~~CLI - CURRENTLY DOES NOT WORK~~

```
npx tsc to-do-list.ts
```

```
node -e require("./to-do-list").addNewItem([], "bread" )
```

### How to run test

```
npm test
```
