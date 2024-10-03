const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "logs");

const createLogs = () => {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log("Logs directory created.");
  }

  process.chdir(logsDir);

  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is the log file number ${i}.`);
    console.log(fileName);
  }
};

const removeLogs = () => {
  if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    files.forEach((file) => {
      fs.unlinkSync(path.join(logsDir, file));
      console.log(`delete files ... ${file}`);
    });

    fs.rmdirSync(logsDir);
    console.log("Logs directory removed.");
  } else {
    console.log("Logs directory does not exist.");
  }
};

// Uncomment one of the following lines to run either function

//createLogs(); 
  removeLogs();
