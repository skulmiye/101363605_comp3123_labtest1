/*
Question 3: File Module
1. Remove Log files
*/

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDir)){

    // Read the directory and get the list of files
    const filesToDelete = fs.readdirSync(logsDir);
  
    // remove all the files from the Logs directory, if exists
    filesToDelete.forEach(file => {
        const filePath = path.join(logsDir, file);
        fs.unlinkSync(filePath);
        // output the file names to delete
        console.log(`deleted files...${file}`);
    });



    // remove the Logs directory
    fs.rmdirSync(logsDir);

    console.log('Logs directory removed successfully.');
}
else {
  console.log('Logs directory does not exist.');
}