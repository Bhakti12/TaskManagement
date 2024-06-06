import { Task, User } from "../types/task";
import express, { Response } from "express";
import * as T from "@effect-ts/core/Effect";
import { catchAllErrors } from "../config/errorhandler";
import {
  createTaskOfUserService,
  createUserService,
  getAllTaskOfUserService,
  getTaskOfUserService,
  updateTaskOfUser
} from "../service/task.service";
import { sendJSONResponse } from "../config/response";

export const createUserController = (
  req: express.Request,
  res: Response
): void => {
  const userData = req.body;

  const effect = createUserService(userData);

  T.run(effect, (result) => {
    switch (result._tag) {
      case "Success":
        sendJSONResponse(res, "added successfully", null, result.value);
        break;
      case "Failure":
        catchAllErrors;
        break;
    }
  });
};

export const createTaskOfUserController = (
  req: express.Request,
  res: Response
): void => {
  const user_id = req.params.user_id;
  const taskData: Task = req.body;
  const effect = createTaskOfUserService(user_id, taskData);
  T.run(effect, (result) => {
    switch (result._tag) {
      case "Success":
        sendJSONResponse(res, "task added successfully", null, result.value);
        break;
      case "Failure":
        catchAllErrors;
        break;
    }
  });
};

export const getAllTasksOfUserController = (
  req: express.Request,
  res: Response
): void => {
  const user_id = req.params.user_id;
  const effect = getAllTaskOfUserService(user_id);
  T.run(effect, (result) => {
    switch (result._tag) {
      case "Success":
        sendJSONResponse(res, null, null, result.value);
        break;
      case "Failure":
        catchAllErrors;
        break;
    }
  });
};

export const getTaskOfUserController = (
  req: express.Request,
  res: Response
): void => {
  const user_id = req.params.user_id;
  const task_id = req.params.task_id;
  const effect = getTaskOfUserService(user_id, task_id);
  T.run(effect, (result) => {
    switch (result._tag) {
      case "Success":
        sendJSONResponse(res, null, null, result.value);
        break;
      case "Failure":
        catchAllErrors;
        break;
    }
  });
};

export const updateTaskOfUserController = (
  req: express.Request,
  res: Response
): void => {
    const user_id = req.params.user_id;
    const task_id = req.params.task_id;
    const updateTask = req.body;
    const effect = updateTaskOfUser(user_id, task_id, updateTask);
    T.run(effect, (result) => {
        switch (result._tag) {
            case "Success":
                sendJSONResponse(res, null, null, result.value);
                break;
            case "Failure":
                catchAllErrors;
                break;
        }
    })
};
