import { GeneralError } from './GeneralError';

function Unauthorized(message: string) {
    const error = GeneralError(401, 'Unauthorized', message);

    return error;
}

export { Unauthorized };
