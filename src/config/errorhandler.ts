import * as T from '@effect-ts/core/Effect'
import { GeneralError } from '../errors/GeneralError'

export const catchAllErrors = <R, A>(effect: T.Effect<R, GeneralError, A>): T.Effect<R, GeneralError, A> =>
    T.catchAll_(
        effect,
        (error) =>
            T.fail(error)
    )

