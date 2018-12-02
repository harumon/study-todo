require("lodash");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('>');
rl.prompt();
//display usage
console.log("Press 1 to display your Todo List, Press 2 to add new Task, Press 3 to delete all tasks");

//global variables
let todoList = [];
let newTodo = 'answer';

let answer = '';

//input unicode
rl.on('line', key => {
  console.log("Press 1 to display your Todo List, Press 2 to add new Task, Press 3 to delete all tasks");

  if(!answer) {
    if(answer === 'add') {
      console.log('-');  
      
      todoList.push(newTodo);  //push recently added item to array
      console.log(todoList);   //display to do list
    
    }
  }

  // 1. display
  if (key === '1') {
    console.log(todoList)
  }

  // 2. add
  if (key === '2') {
    // Question
    rl.question(key + '. What is your new task?', (newTodo) => {
      answer = 'add';
      console.log('Added new task: ' + newTodo);
      todoList.push(newTodo);
    });
  }

  // 3. delete
  if (key === '3') {
    rl.question('Are you sure you want to delete all? (Y/N)', (key) => {
      if (key === 'Y') {
        console.log(key + '. Deleting all tasks');
        todoList.splice(newTodo);
        console.log(todoList);
      } else if ('N') {
        console.log('not deleted');
      }
    });
  }

  // exit ctrl + c
  if (key === '\U001B') 
    //Program exits
    process.exit();
});

