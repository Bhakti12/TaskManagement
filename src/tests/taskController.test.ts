import express, { Response } from "express";
import { createUserService, createTaskOfUserService, getAllTaskOfUserService, getTaskOfUserService, updateTaskOfUser, deleteTaskOfUser } from "../service/task.service";
import { sendJSONResponse } from "../config/response";
import { createUserController, createTaskOfUserController, getAllTasksOfUserController, getTaskOfUserController, updateTaskOfUserController, deleteTaskOfUserController } from "../controller/task.controller";
import { User, Task, TaskStatus } from "../types/task";

jest.mock("../service/task.service");
jest.mock("../config/response");

describe("Task Controller Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("createUserController should call createUserService and send response", async () => {
    const req = {} as express.Request;
    const res = {} as Response;
    const userData: User = {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      password: "password",
      tasks: []
    };

    (createUserService as jest.Mock).mockResolvedValue(userData);

    await createUserController(req, res);

    expect(createUserService).toHaveBeenCalledWith(req.body);
    expect(sendJSONResponse).toHaveBeenCalledWith(res, "added successfully", null, userData);
  });

  test("createTaskOfUserController should call createTaskOfUserService and send response", async () => {
    const req = {} as express.Request;
    const res = {} as Response;
    const user_id = "1";
    const taskData: Task = {
      id: "task1",
      title: "Task 1",
      description: "Description",
      date: "2024-06-06",
      status: "pending" as TaskStatus
    };

    (createTaskOfUserService as jest.Mock).mockResolvedValue(taskData);

    await createTaskOfUserController(req, res);

    expect(createTaskOfUserService).toHaveBeenCalledWith(user_id, req.body);
    expect(sendJSONResponse).toHaveBeenCalledWith(res, "task added successfully", null, taskData);
  });

});
