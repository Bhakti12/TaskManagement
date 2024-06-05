function GeneralError(code: number, status: string, message: string) {
    const error = new Error(message) as GeneralError;
    error.name = 'GeneralError';
    error.code = code;
    error.status = status;

    error.getCode = function() {
        return this.code;
    };

    error.toJSON = function() {
        return {
            code: this.code,
            status: this.status,
            message: this.message,
        };
    };

    return error;
}

interface GeneralError extends Error {
    code: number;
    status: string;
    getCode: () => number;
    toJSON: () => { code: number; status: string; message: string };
}

export { GeneralError };
