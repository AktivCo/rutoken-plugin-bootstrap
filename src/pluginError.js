class PluginError {
    constructor(err, method, errorCodes) {
        /* eslint-disable  no-restricted-globals */
        let code = null;
        if (err.message) {
            code = Number(err.message);
        } else {
            code = Number(err);
        }

        if (errorCodes[code]) {
            this.description = errorCodes[code];
            this.code = code;
        } else {
            this.description = errorCodes.DEFAULT_ERROR;
            this.code = null;
        }

        this.method = method;
    }
}

export default PluginError;
