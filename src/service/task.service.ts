import * as T from '@effect-ts/core/Effect'
import { pipe } from '@effect-ts/core/Function'
import { Task, User } from '../types/task';
import { createTaskOfUserRepo, createUserRepo, getAllTaskOfUserRepo } from '../repository/task.repository';

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