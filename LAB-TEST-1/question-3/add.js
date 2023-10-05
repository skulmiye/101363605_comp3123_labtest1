/*
Question 3: File Module
2. Create Log files
*/

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// create a Logs directory, if it does not exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// change the current process to the new Logs directory
process.chdir(logsDir);

// create 10 log files and write some text into the file
for (let i = 0; i <= 9; i++) {
    const fileName = `log${i}.txt`;
    const content = `Content for ${fileName}`;

    fs.writeFileSync(fileName, content);
    // output the files names to console
    console.log(`${fileName} created.`);
}
  