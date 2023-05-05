const fs = require('fs');
const path = require('path');
const readline = require('node:readline');
const EventEmmiter = require('events');
const emmiter = new EventEmmiter();
const writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

const {
  stdin: input,
  stdout: output,
} = require('node:process');
const { stdout } = require('process');

stdout.write('Please, write something here \n(If you want to close app, you can write "exit" or type on the keyboard "ctrl + c") \n');

const rl = readline.createInterface({ input, output });

rl.on('line', (answer) => {
emmiter.emit('event', answer)
writeableStream.write(answer + '\n');
});

rl.on('SIGINT', () => {
  process.exit();
});

emmiter.on('event', (answer) => {
  if (answer === 'exit'){
    process.exit();
  };
  });




