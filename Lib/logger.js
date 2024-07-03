const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const appendFile = promisify(fs.appendFile);

const logFilePath = process.env.LOG_FILE_PATH || path.join(__dirname, '../logs/logs.txt');
const environment = process.env.NODE_ENV || 'development';

const logToFile = async (message) => {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    try {
        await appendFile(logFilePath, logMessage, 'utf8');
    } catch (error) {
        console.error('Failed to write to log file:', error);
    }
};

const logger = {
    info: (message) => {
        if (environment === 'development') {
            console.log(`INFO: ${message}`);
        }
        logToFile(`INFO: ${message}`);
    },
    error: (message) => {
        if (environment === 'development') {
            console.error(`ERROR: ${message}`);
        }
        logToFile(`ERROR: ${message}`);
    },
    request: (message) => {
        if (environment === 'development') {
            console.log(`REQUEST: ${message}`);
        }
        logToFile(`REQUEST: ${message}`);
    }
};

module.exports = logger;
