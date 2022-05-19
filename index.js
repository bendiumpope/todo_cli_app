#! /usr/bin/env node

import { program } from 'commander';
import { list, add, done, remove } from './actions/actions.js';

program
  .command('list')
  .description('this command lists all TODOs')
  .action(list);

program
.command('add <todo>')
.description('Add a todo')
.action(add)

program
  .command('done <todoId>')
  .description('take the todo number and mark the todo as done')
  .action(done);

program
  .command('delete <todoId>')
  .description('take the todo number and delete the todo')
  .action(remove);

program.parse();
