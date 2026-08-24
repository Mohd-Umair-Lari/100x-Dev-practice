const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('CLI to count the number of words')
  .argument('<file>', 'word to count')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const words = data.split(' ').length+1;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program.parse();