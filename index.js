#! /usr/bin/env node

import { program } from 'commander';
import { list, add } from './actions/actions.js';

program
  .command('list')
  .description('this command lists all TODOs')
  .action(list);

program
.command('add <todo>')
.description('Add a todo')
.action(add)

program.parse();
