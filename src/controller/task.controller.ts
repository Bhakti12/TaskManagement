import { User } from "../types/task";
import express,{Response} from "express";
import * as T from "@effect-ts/core/Effect";
import { catchAllErrors } from "../config/errorhandler";
import { createUserService } from "../service/task.service";
import { sendJSONResponse } from "../config/response";

export const createUserController = (
  req: express.Request,
  res: Response
): void => {
    const userData = req.body;

    const effect = createUserService(userData);

    T.run(effect, result => {
        switch (result._tag) {
            case 'Success':
                sendJSONResponse(res, 'added successfully', null, result.value);
                break;
            case 'Failure':
                catchAllErrors;
                break;
        }
    });  
}