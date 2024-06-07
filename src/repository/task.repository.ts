import { Task, User } from "../types/task";
import { v4 as uuidv4 } from "uuid";

const tasks: Map<string, Task> = new Map();
const users: Map<string, User> = new Map();

//create user
export const createUserRepo = (user: User): any => {
  console.log('size before adding:', users.size);
  const id = uuidv4();
  const addUser = users.set(id, user);
  console.log("after adding (add user):", addUser);
  console.log('size after adding:', users.size);
  return addUser;
};

//create task of specified user
export const createTaskOfUserRepo = (user_id: string, task: Task): Task => {
  console.log("inside create task repo");
  console.log('size before adding',tasks, tasks.size);

  // Find the user by user_id
  const user = users.get(user_id);
  console.log('user_id', user, user_id);
  if (!user) {
    throw new Error(`User with ID ${user_id} not found`);
  }

  // Generate a new task ID and create the new task object
  const taskId = uuidv4();
  const newTask: Task = { id: taskId, ...task };
  console.log('task data',newTask);
  // Add the new task to the tasks map
  tasks.set(taskId, newTask);

  // Add the new task to the user's tasks array
  user.tasks.push(newTask);

  console.log('size after adding', tasks, tasks.size);
  console.log('users',users);

  return newTask;
};

//get all tasks of specified user
export const getAllTaskOfUserRepo = (user_id: string): Task[] => {
  const userId = users.get(user_id);
  console.log('users',users,userId);
  return userId?.tasks || [];
};

//get specfied task of specified user
export const getTaskOfUserRepo = (user_id: string, task_id: string): Task => {
  const user = users.get(user_id);
  console.log('users',users,user);
  const task = user?.tasks.find((t) => t.id === task_id);

  // Check if the task exists in the global tasks map
  const taskFromMap = tasks.get(task_id);
  console.log('tasks',tasks,taskFromMap);
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
