import * as T from '@effect-ts/core/Effect'
import {
  createUserService,
  createTaskOfUserService,
  getAllTaskOfUserService,
  getTaskOfUserService,
  updateTaskOfUser,
  deleteTaskOfUser
} from '../service/task.service';
import {
  createUserRepo,
  createTaskOfUserRepo,
  getAllTaskOfUserRepo,
  getTaskOfUserRepo,
  updateTaskOfUserRepo,
  deleteTaskOfUserRepo
} from '../repository/task.repository';
import { User, Task, TaskStatus } from '../types/task';

jest.mock('../repository/task.repository');

describe('Task Service Tests', () => {
  beforeEach(() => {
    // Clear any mock calls before each test
    jest.clearAllMocks();
  });

  test('createUserService should call createUserRepo and return the user', async () => {
    const user: User = {
      id: "1",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      tasks: []
    };

    (createUserRepo as jest.Mock).mockReturnValueOnce(new T.IEffectTotal(() => true));

    const result = await T.run(createUserService(user), T.succeed);
    expect(createUserRepo).toHaveBeenCalledWith(user);
    expect(result).toEqual(user);
  });

  test('createTaskOfUserService should call createTaskOfUserRepo and return the task', async () => {
    const user_id = '1';
    const task: Task = { id: 'task1', title: 'Task 1', description: 'Description', date: '2024-06-06', status: 'pending' as TaskStatus };

    (createTaskOfUserRepo as jest.Mock).mockReturnValueOnce(new T.IEffectTotal(() => task));

    const result = await T.run(createTaskOfUserService(user_id, task), T.succeed);
    expect(createTaskOfUserRepo).toHaveBeenCalledWith(user_id, task);
    expect(result).toEqual(task);
  });

  test('getAllTaskOfUserService should call getAllTaskOfUserRepo and return the tasks', async () => {
    const user_id = '1';
    const tasks: Task[] = [
      { id: 'task1', title: 'Task 1', description: 'Description', date: '2024-06-06', status: 'pending' as TaskStatus },
      { id: 'task2', title: 'Task 2', description: 'Description', date: '2024-06-07', status: 'completed' as TaskStatus }
    ];

    (getAllTaskOfUserRepo as jest.Mock).mockReturnValueOnce(new T.IEffectTotal(() => tasks));

    const result = await T.run(getAllTaskOfUserService(user_id), T.succeed);
    expect(getAllTaskOfUserRepo).toHaveBeenCalledWith(user_id);
    expect(result).toEqual(tasks);
  });

  test('getTaskOfUserService should call getTaskOfUserRepo and return the task', async () => {
    const user_id = '1';
    const task_id = 'task1';
    const task: Task = { id: 'task1', title: 'Task 1', description: 'Description', date: '2024-06-06', status: 'pending' as TaskStatus };

    (getTaskOfUserRepo as jest.Mock).mockReturnValueOnce(new T.IEffectTotal(() => task));

    const result = await T.run(getTaskOfUserService(user_id, task_id), T.succeed);
    expect(getTaskOfUserRepo).toHaveBeenCalledWith(user_id, task_id);
    expect(result).toEqual(task);
  });

  test('updateTaskOfUser should call updateTaskOfUserRepo and return the updated task', async () => {
    const user_id = '1';
    const task_id = 'task1';
    const taskUpdates: Partial<Task> = { title: 'Updated Task' };
    const updatedTask: Task = { id: 'task1', title: 'Updated Task', description: 'Description', date: '2024-06-06', status: 'pending' as TaskStatus };

    (updateTaskOfUserRepo as jest.Mock).mockReturnValueOnce(new T.IEffectTotal(() => updatedTask));

    const result = await T.run(updateTaskOfUser(user_id, task_id, taskUpdates), T.succeed);
    expect(updateTaskOfUserRepo).toHaveBeenCalledWith(user_id, task_id, taskUpdates);
    expect(result).toEqual(updatedTask);
  });

  test('deleteTaskOfUser should call deleteTaskOfUserRepo and return the deleted task', async () => {
    const user_id = '1';
    const task_id = 'task1';
    const deletedTask: Task = { id: 'task1', title: 'Task 1', description: 'Description', date: '2024-06-06', status: 'pending' as TaskStatus };

    (deleteTaskOfUserRepo as jest.Mock).mockReturnValueOnce(new T.IEffectTotal(() => deletedTask));

    const result = await T.run(deleteTaskOfUser(user_id, task_id), T.succeed);
    expect(deleteTaskOfUserRepo).toHaveBeenCalledWith(user_id, task_id);
    expect(result).toEqual(deletedTask);
  });
});
