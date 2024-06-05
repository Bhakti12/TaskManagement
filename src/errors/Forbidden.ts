import { GeneralError } from './GeneralError';

function Forbidden(message: string) {
    const error = GeneralError(403, 'Forbidden', message);

    return error;
}

export { Forbidden };