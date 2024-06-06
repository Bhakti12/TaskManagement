import { Task, User } from "../types/task";
import { v4 as uuidv4 } from "uuid";

const tasks: Map<string, Task> = new Map();
const users: Map<string, User> = new Map();

//create user
export const createUserRepo = (user: User): any => {
  for (let user of users) {
    console.log(".....", user);
  }
  const id = uuidv4();
  const addUser = users.set(id, user);
  console.log("after adding(add user)", addUser);
  return addUser;
};

//create task of specified user
export const createTaskOfUserRepo = (user_id: string, task: Task): Task => {
  const user = users.get(user_id);

  const taskId = uuidv4();
  const newTask: Task = { id: taskId, ...task };

  tasks.set(taskId, newTask);
  user?.tasks.push(newTask);

  return newTask;
};

//get all tasks of specified user
export const getAllTaskOfUserRepo = (user_id: string): Task[] => {
  const userId = users.get(user_id);
  return userId?.tasks || [];
};

//get specfied task of specified user
export const getTaskOfUserRepo = (user_id: string, task_id: string): Task => {
  const user = users.get(user_id);

  const task = user?.tasks.find((t) => t.id === task_id);

  // Check if the task exists in the global tasks map
  const taskFromMap = tasks.get(task_id);

  return taskFromMap as Task;
};

//update task of specified user
export const updateTaskOfUserRepo = (
  user_id: string,
  task_id: string,
  updates: Partial<Task>
): Task | undefined => {
  const user = users.get(user_id);

  if (!user) {
    return undefined;
  }

  const taskIndex = user.tasks.findIndex((t) => t.id === task_id);

  if (taskIndex === -1) {
    return undefined;
  }

  const taskFromMap = tasks.get(task_id);

  if (!taskFromMap) {
    return undefined;
  }

  const updatedTask = {
    ...taskFromMap,
    ...updates,
    title: updates.title || taskFromMap.title,
    description: updates.description || taskFromMap.description,
    date: updates.date || taskFromMap.date,
    status: updates.status || taskFromMap.status
  };
  tasks.set(task_id, updatedTask);
  user.tasks[taskIndex] = updatedTask;

  return updatedTask;
};

//delete task of specified user
export const deleteTaskOfUserRepo = (
  user_id: string,
  task_id: string
): Task | undefined => {
  const user = users.get(user_id);

  if (!user) {
    return undefined;
  }

  const taskIndex = user.tasks.findIndex((t) => t.id === task_id);

  if (taskIndex === -1) {
    return undefined;
  }

  const taskFromMap = tasks.get(task_id);

  if (!taskFromMap) {
    return undefined;
  }

  const deletedTask = taskFromMap;
  tasks.delete(task_id);
  user.tasks.splice(taskIndex, 1);

  return deletedTask;
};
