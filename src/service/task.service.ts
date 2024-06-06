import * as T from '@effect-ts/core/Effect'
import { pipe } from '@effect-ts/core/Function'
import { Task, User } from '../types/task';
import { createTaskOfUserRepo, createUserRepo, deleteTaskOfUserRepo, getAllTaskOfUserRepo, getTaskOfUserRepo, updateTaskOfUserRepo } from '../repository/task.repository';

export const createUserService = (user: User): T.Effect<unknown, Error, User> => new T.IEffectTotal(() => {
    const userResponse = createUserRepo(user);
    console.log(userResponse);
    return userResponse;
});

export const createTaskOfUserService = (user_id: string, task: Task): T.Effect<unknown, Error, Task> => new T.IEffectTotal(() => {
    const addTask = createTaskOfUserRepo(user_id, task);
    return addTask;
});

export const getAllTaskOfUserService = (user_id: string): T.Effect<unknown, Error, Task[]> => new T.IEffectTotal(() => {
    const getAllTask = getAllTaskOfUserRepo(user_id);
    return getAllTask;
});

export const getTaskOfUserService = (user_id: string, task_id: string): T.Effect<unknown, Error, Task> => new T.IEffectTotal(() => {
    const getTask = getTaskOfUserRepo(user_id,task_id);
    return getTask;
});

export const updateTaskOfUser = (user_id: string, task_id: string, task: Partial<Task>): T.Effect<unknown, Error, Task | undefined> => new T.IEffectTotal(() => {
    const updateTask = updateTaskOfUserRepo(user_id,task_id,task);
    return updateTask;
});

export const deleteTaskOfUser = (user_id: string, task_id: string): T.Effect<unknown, Error, Task | undefined> => new T.IEffectTotal(() => {
    const deleteTask = deleteTaskOfUserRepo(user_id,task_id);
    return deleteTask;
});