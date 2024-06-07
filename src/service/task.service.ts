import * as T from '@effect-ts/core/Effect'
import { pipe } from '@effect-ts/core/Function'
import { Task, User } from '../types/task';
import { createTaskOfUserRepo, createUserRepo, deleteTaskOfUserRepo, getAllTaskOfUserRepo, getTaskOfUserRepo, updateTaskOfUserRepo } from '../repository/task.repository';

/**
 * Creates a new user and adds it to the users map.
 *
 * @return {T.Effect<unknown, Error, User>} An effect that, when executed, creates a new user with a unique ID and an empty tasks map, adds the user to the users map, and returns the created user.
 */
export const createUserService = (user: User): T.Effect<unknown, Error, User> => new T.IEffectTotal(() => {
    const userResponse = createUserRepo(user);
    console.log(userResponse);
    return userResponse;
});

/**
 * Creates a new task for a user and returns the created task.
 *
 * @param {string} user_id - The ID of the user for whom the task is being created.
 * @param {Task} task - The task object containing the details of the task to be created.
 * @return {T.Effect<unknown, Error, Task>} An effect that, when executed, creates a new task for the specified user and returns the created task.
 */
export const createTaskOfUserService = (user_id: string, task: Task): T.Effect<unknown, Error, Task> => new T.IEffectTotal(() => {
    console.log("inside task create service");
    const addTask = createTaskOfUserRepo(user_id, task);
    console.log("add task service",addTask);
    return addTask;
});

/**
 * Retrieves all tasks associated with a specific user.
 *
 * @param {string} user_id - The ID of the user whose tasks are being retrieved.
 * @return {T.Effect<unknown, Error, Task[]>} An effect that, when executed, retrieves all tasks associated with the specified user and returns them as an array of Task objects.
 */
export const getAllTaskOfUserService = (user_id: string): T.Effect<unknown, Error, Task[]> => new T.IEffectTotal(() => {
    const getAllTask = getAllTaskOfUserRepo(user_id);
    return getAllTask;
});

/**
 * Retrieves a specific task associated with a user.
 *
 * @param {string} user_id - The ID of the user whose task is being retrieved.
 * @param {string} task_id - The ID of the task being retrieved.
 * @return {T.Effect<unknown, Error, Task>} An effect that, when executed, retrieves the specified task associated with the user and returns it as a Task object.
 */
export const getTaskOfUserService = (user_id: string, task_id: string): T.Effect<unknown, Error, Task> => new T.IEffectTotal(() => {
    const getTask = getTaskOfUserRepo(user_id,task_id);
    return getTask;
});

/**
 * Updates a task associated with a specific user.
 *
 * @param {string} user_id - The ID of the user whose task is being updated.
 * @param {string} task_id - The ID of the task being updated.
 * @param {Partial<Task>} task - The updated task object.
 * @return {T.Effect<unknown, Error, Task | undefined>} An effect that, when executed, updates the specified task associated with the user and returns it as a Task object or undefined if the update fails.
 */
export const updateTaskOfUser = (user_id: string, task_id: string, task: Partial<Task>): T.Effect<unknown, Error, Task | undefined> => new T.IEffectTotal(() => {
    const updateTask = updateTaskOfUserRepo(user_id,task_id,task);
    return updateTask;
});

/**
 * Deletes a task associated with a specific user.
 *
 * @param {string} user_id - The ID of the user whose task is being deleted.
 * @param {string} task_id - The ID of the task being deleted.
 * @return {T.Effect<unknown, Error, Task | undefined>} An effect that, when executed, deletes the specified task associated with the user and returns it as a Task object or undefined if the deletion fails.
 */
export const deleteTaskOfUser = (user_id: string, task_id: string): T.Effect<unknown, Error, Task | undefined> => new T.IEffectTotal(() => {
    const deleteTask = deleteTaskOfUserRepo(user_id,task_id);
    return deleteTask;
});