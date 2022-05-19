import fs from 'fs/promises';
import chalk from 'chalk';
// import todos from '../data/store.json'

export const list = async () => {
  try {
    const todosList = await fs.readFile(
      `${process.cwd()}/data/store.json`,
      'utf8'
    );

    const todos = todosList ? JSON.parse(todosList) : [];

    if (todos && todos.length > 0) {
      console.log(chalk.bold('Tasks marked in * are done.'));

      todos.forEach((todo, index) => {
        if (todo.done) {
          console.log(`(${index + 1} *). ${todo.text}`);
        } else {
          console.log(`(${index + 1}) ${todo.text}`);
        }
      });
    } else {
      console.log('Your todo list is empty ');
    }
  } catch (error) {
    // console.log("an error occured: ");
    console.log(error);
  }
};

export const add = async (todo) => {
  try {
    const todosList = await fs.readFile(`./data/store.json`, 'utf8');
    const todos = todosList ? JSON.parse(todosList) : [];

    todos.push({
      text: todo,
      done: false,
    });
    await fs.writeFile(`./data/store.json`, JSON.stringify(todos));
  } catch (error) {
    console.log(error);
  }
};

export const done = async (todoId) => {
  try {
    const todosList = await fs.readFile(
      `${process.cwd()}/data/store.json`,
      'utf8'
    );

    const todos = todosList ? JSON.parse(todosList) : [];
    
    if (todos.length <= 0 || (+todoId) > todos.length) {
      console.log('You do not have a todo with this Id or your todo list is empty');
    }else{

      const newTodos = todos.map((todo, index)=>{

        if((index + 1) === (+todoId)){
          todo.done ? (todo.done = false) : (todo.done = true);
        }

        return todo;
        
      });

      await fs.writeFile(`./data/store.json`, JSON.stringify(newTodos));
    }
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (todoId) => {
  try {
    const todosList = await fs.readFile(
      `${process.cwd()}/data/store.json`,
      'utf8'
    );

    const todos = todosList ? JSON.parse(todosList) : [];

    if (todos.length <= 0 || (+todoId) > todos.length) {
      console.log(
        'You do not have a todo with this Id or your todo list is empty'
      );
    } else {
      const newTodos = todos.filter((todo, index) => index + 1 !== (+todoId));

      console.log(newTodos);
      await fs.writeFile(`./data/store.json`, JSON.stringify(newTodos));
    }
  } catch (error) {
    console.log(error);
  }
};
