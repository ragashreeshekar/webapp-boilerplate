var settings = {
    cluster: {
        maxWorkers: 1
    },
    sessionSecret: 'SessionSecretForDevelopment',
    winston: {
        prefix: '',
        transports: {
            Console: {
                level: 'trace',
                silent: false,
                colorize: true,
                timestamp: true, // or function()
                json: false,
                handleExceptions: true
            },
            File: {
                level: 'trace',
                silent: false,
                colorize: false,
                timestamp: true, // or function()
                filename: 'log/app%s.log',
                maxsize: 104857600,
                maxFiles: 10,
                json: true,
                handleExceptions: true
            }
        },
        exceptionHandlers: {
            File: {
                timestamp: true, // or function()
                filename: 'log/error%s.log',
                maxsize: 104857600,
                maxFiles: 10,
                json: true
            }
        }
    }
};

module.exports = settings;
