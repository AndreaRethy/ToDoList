# Andrea Réthy - Entrega 1.1: To Do List

[![Test](https://github.com/AndreaRethy/ToDoList/actions/workflows/main.yml/badge.svg)](https://github.com/AndreaRethy/ToDoList/actions/workflows/main.yml)

## Introduction

    The goal of this exercise is to create a to-do list application using TypeScript and TDD. The application must have the following characteristics:

- Allow adding a task to the list.
- Allow marking a task as completed.
- Allow to remove a task from the list.
- Show the list of tasks.

## Project Setup

Use node version v20.12.2

```
nvm use 20
```

### devDependencies:

@types/jest: ^29.5.12

jest: ^29.7.0

ts-jest: ^29.1.4

ts-node: ^10.9.2

typescript: ^5.4.5

## How to test (TypeScript)

Make sure codeblock marked 'FRONTEND is commented out in **to-do-list.ts**

Make sure export statement is uncommented in **to-do-list.ts**

```
npm test
```

## Front-end functionality:

- To add an item: Type in the text box and click "Add New Item"
- To Clear list: Click on "Clear All"
- To mark an item item done simply click on the item
- To remove an item click on it twice (first to mark done, second to remove)

### Test Front-end (JavaScript)

Uncomment code block marked 'FRONTEND' if necessary in **to-do-list.js**

Comment out export statement in in **to-do-list.js**

```
open index.html
```

To update .js file comment out export statement in to-do-list.ts and run:

```
npx tsc
```
