import { Response } from 'express'
import * as E from '@effect-ts/core/Either'
import { AppError } from './errortypes'

export const handleEffectResult = <A>(res: Response) => (result: E.Either<AppError, A>) => {
    if (E.isLeft(result)) {
        const error = result.left
        res.status(error.statusCode).json({ message: error.message })
    } else {
        res.json(result.right)
    }
}
export { AppError }