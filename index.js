#! /usr/bin/env node

import { program } from 'commander';

program
  .command('-list')
  .description('this command lists all TODOs')
  .action(list);
