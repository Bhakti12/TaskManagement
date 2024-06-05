export class AppError extends Error {
    readonly statusCode: number

    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
    }
}

export const notFoundError = (message: string): AppError => new AppError(message, 404)
export const badRequestError = (message: string): AppError => new AppError(message, 400)
export const internalServerError = (message: string = 'Internal Server Error'): AppError => new AppError(message, 500)
