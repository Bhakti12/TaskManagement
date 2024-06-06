import {
  createUserRepo,
  createTaskOfUserRepo,
  getAllTaskOfUserRepo,
  getTaskOfUserRepo,
  updateTaskOfUserRepo,
  deleteTaskOfUserRepo
} from "../repository/task.repository";
import { TaskStatus } from "../types/task";

const users = new Map();
const tasks = new Map();

describe("Task Repository", () => {
  beforeEach(() => {
    users.clear();
    tasks.clear();
  });

  test("getAllTaskOfUserRepo should return an empty array if user has no tasks", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      tasks: []
    };
    createUserRepo(user); // Create user first
    const result = getAllTaskOfUserRepo("1");
    expect(result).toEqual([]);
  });

  test("getAllTaskOfUserRepo should return an array of tasks for a user", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      tasks: []
    };
    const task1 = {
      id: "task1",
      title: "Task 1",
      description: "Description",
      date: "2024-06-06",
      status: "done" as TaskStatus
    };
    const task2 = {
      id: "task2",
      title: "Task 2",
      description: "Description",
      date: "2024-06-07",
      status: "completed" as TaskStatus
    };

    createUserRepo(user); // Create user first
    createTaskOfUserRepo("1", task1);
    createTaskOfUserRepo("1", task2);

    const result = getAllTaskOfUserRepo("1");
    expect(result).toEqual([task1, task2]);
  });

  test("getTaskOfUserRepo should return a task for a user if it exists", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      tasks: []
    };
    const task = {
      id: "task1",
      title: "Task 1",
      description: "Description",
      date: "2024-06-06",
      status: "done" as TaskStatus
    };

    createUserRepo(user); // Create user first
    createTaskOfUserRepo("1", task);

    const result = getTaskOfUserRepo("1", "task1");
    expect(result).toEqual(task);
  });

  test("getTaskOfUserRepo should return undefined if the task does not exist for the user", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      tasks: []
    };
    createUserRepo(user); // Create user first

    const result = getTaskOfUserRepo("1", "task1");
    expect(result).toBeUndefined();
  });

  test("updateTaskOfUserRepo should update a task for a user if it exists", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      tasks: []
    };
    const task = {
      id: "task1",
      title: "Task 1",
      description: "Description",
      date: "2024-06-06",
      status: "pending" as TaskStatus
    };
    const updatedTask = {
      id: "task1",
      title: "Updated Task",
      description: "Updated Description",
      date: "2024-06-07",
      status: "completed" as TaskStatus
    };

    createUserRepo(user); // Create user first
    createTaskOfUserRepo("1", task);

    const result = updateTaskOfUserRepo("1", "task1", updatedTask);
    expect(result).toEqual(updatedTask);
    expect(tasks.get("task1")).toEqual(updatedTask);
  });

  test("updateTaskOfUserRepo should return undefined if the task does not exist for the user", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      tasks: []
    };
    createUserRepo(user); // Create user first

    const result = updateTaskOfUserRepo("1", "task1", {
      title: "Updated Task"
    });
    expect(result).toBeUndefined();
  });

  test("deleteTaskOfUserRepo should delete a task for a user if it exists", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      tasks: []
    };
    const task = {
      id: "task1",
      title: "Task 1",
      description: "Description",
      date: "2024-06-06",
      status: "pending" as TaskStatus
    };

    createUserRepo(user); // Create user first
    createTaskOfUserRepo("1", task);

    const result = deleteTaskOfUserRepo("1", "task1");
    expect(result).toEqual(task);
    expect(tasks.size).toBe(0);
    expect(users.get("1").tasks.length).toBe(0);
  });

  test("deleteTaskOfUserRepo should return undefined if the task does not exist for the user", () => {
    const user = {
      id: "1",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      tasks: []
    };
    createUserRepo(user); // Create user first

    const result = deleteTaskOfUserRepo("1", "task1");
    expect(result).toBeUndefined();
  });
});
