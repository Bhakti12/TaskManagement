import { GeneralError } from './GeneralError';

function InternalServerError(message: string) {
    const error = GeneralError(500, 'Internal Server Error', message);

    return error;
}

export { InternalServerError };