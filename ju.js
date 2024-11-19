#!/usr/bin/env node
import { program } from 'commander';
import { exec } from 'child_process';
import fs from 'fs';

program.name('ju').description('CLI to manage jupiter');

program
  .argument('<directory>', 'Directory to clone the Next.js app')
  .action(async directory => {
    exec(`npx @rahem/jupiter ${directory}`);
  });

program.parse();
