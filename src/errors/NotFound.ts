import { GeneralError } from './GeneralError';

function NotFound(message: string) {
    const error = GeneralError(404, 'Not Found', message);

    return error;
}

export { NotFound };
