import log4js from "log4js";

const deployLogger = () => {
    const log4jsConfig = {
        "appenders": {
            "console": {
                "type": "console",
                "layout": {
                    "type": "pattern",
                    "pattern": "%[%f{3}:%l  %d{yyyy-MM-dd} %r %p %m%]"
                }
            },
            "system": {
                "type": "file",
                "filename": "logs/system.log",
                "layout": {
                    "type": "pattern",
                    "pattern": "%f{3}:%l  %d{yyyy-MM-dd} %r %p %m"
                }
            },
            "error": {
                "type": "file",
                "filename": "logs/error.log",
                "layout": {
                    "type": "pattern",
                    "pattern": "%f{3}:%l  %d{yyyy-MM-dd} %r %p %m"
                }
            },
            "systemFile": {
                "type": "logLevelFilter",
                "appender": "system",
                "level": "all"
            },
            "errorFile": {
                "type": "logLevelFilter",
                "appender": "error",
                "level": "warn"
            }
        },
        "categories": {
            "default": {
                "appenders": [
                    "console",
                    "systemFile",
                    "errorFile"
                ],
                "level": "all",
                "enableCallStack": true
            }
        }
    };
    log4js.configure(log4jsConfig);

    return log4js.getLogger();
}

export const logger = deployLogger();