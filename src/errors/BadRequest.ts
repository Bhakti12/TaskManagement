import { GeneralError } from './GeneralError';

function BadRequest(message: string, errors?: Record<string, unknown>) {
    const error = GeneralError(400, 'Bad Request', message) as BadRequest;
    error.errors = errors;

    error.toJSON = function() {
        return {
            code: this.code,
            status: this.status,
            message: this.message,
            errors: this.errors,
        };
    };

    return error;
}

interface BadRequest extends GeneralError {
    errors?: Record<string, unknown>;
    toJSON: () => { code: number; status: string; message: string; errors?: Record<string, unknown> };
}

export { BadRequest };
