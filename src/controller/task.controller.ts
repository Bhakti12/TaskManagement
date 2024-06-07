import { Task, User } from "../types/task";
import express, { Response } from "express";
import * as T from "@effect-ts/core/Effect";
import { catchAllErrors } from "../config/errorhandler";
import {
  createTaskOfUserService,
  createUserService,
  deleteTaskOfUser,
  getAllTaskOfUserService,
  getTaskOfUserService,
  updateTaskOfUser
} from "../service/task.service";
import { sendJSONResponse } from "../config/response";

export const createUserController = (
  req: express.Request,
  res: Response
): void => {
  console.log("inside first controller");
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
  const user_id = req.params.user_id as string || req.query.user_id as string;
  const taskData: Task = req.body;
  console.log("request data", user_id, taskData);
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
  const user_id = req.params.user_id as string || req.query.user_id as string;
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
  const user_id = req.params.user_id as string || req.query.user_id as string;
  const task_id = req.params.task_id as string || req.query.task_id as string;;
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
  const user_id = req.params.user_id as string || req.query.user_id as string;
  const task_id = req.params.task_id as string || req.query.task_id as string;
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
  });
};

export const deleteTaskOfUserController = (
  req: express.Request,
  res: Response
): void => {
  const user_id = req.params.user_id as string || req.query.user_id as string;
  const task_id = req.params.task_id as string || req.query.task_id as string;
  const effect = deleteTaskOfUser(user_id, task_id);
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
