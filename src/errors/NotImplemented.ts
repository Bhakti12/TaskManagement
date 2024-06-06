import { GeneralError } from './GeneralError';

function NotImplemented(message: string) {
    const error = GeneralError(501, 'Not Implemented', message);

    return error;
}

export { NotImplemented };
