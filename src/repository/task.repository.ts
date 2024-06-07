import { Task, User } from "../types/task";
import { v4 as uuidv4 } from "uuid";

const tasks: Map<string, Task> = new Map();
const users: Map<string, User> = new Map();

/**
 * Creates a new user in the repository.
 *
 * @param {User} user - The user object to be added.
 * @return {any} The result of adding the user to the repository.
 */
export const createUserRepo = (user: User): any => {
  console.log('size before adding:', users.size);
  const id = uuidv4();
  const addUser = users.set(id, user);
  console.log("after adding (add user):", addUser);
  console.log('size after adding:', users.size);
  return addUser;
};

/**
 * Creates a new task for the specified user in the repository.
 *
 * @param {string} user_id - The ID of the user.
 * @param {Task} task - The task object to be added.
 * @return {Task} The newly created task.
 * @throws {Error} If the user with the specified ID is not found.
 */
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

/**
 * Retrieves all tasks associated with a specific user.
 *
 * @param {string} user_id - The ID of the user.
 * @return {Task[]} An array of tasks belonging to the user, or an empty array if no tasks are found.
 */
export const getAllTaskOfUserRepo = (user_id: string): Task[] => {
  const userId = users.get(user_id);
  console.log('users',users,userId);
  return userId?.tasks || [];
};

/**
 * Retrieves a specific task associated with a user.
 *
 * @param {string} user_id - The ID of the user.
 * @param {string} task_id - The ID of the task.
 * @return {Task} The task associated with the user, or undefined if the task or user is not found.
 */
export const getTaskOfUserRepo = (user_id: string, task_id: string): Task => {
  const user = users.get(user_id);
  console.log('users',users,user);
  const task = user?.tasks.find((t) => t.id === task_id);

  // Check if the task exists in the global tasks map
  const taskFromMap = tasks.get(task_id);
  console.log('tasks',tasks,taskFromMap);
  return taskFromMap as Task;
};

/**
 * Updates a task associated with a specific user.
 *
 * @param {string} user_id - The ID of the user whose task is being updated.
 * @param {string} task_id - The ID of the task being updated.
 * @param {Partial<Task>} updates - The updates to be applied to the task.
 * @return {Task | undefined} The updated task, or undefined if the user or task is not found.
 */
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

/**
 * Deletes a task associated with a specific user.
 *
 * @param {string} user_id - The ID of the user.
 * @param {string} task_id - The ID of the task to be deleted.
 * @return {Task | undefined} The deleted task, or undefined if the task or user is not found.
 */
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
