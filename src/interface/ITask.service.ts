import { Task, User } from "../types/task"

export interface ITaskService {
    createUser(user: User): Promise<User>
    createTask(task: Task, user_id: string): Promise<Task>
    getTasksOfUser(user_id: string): Promise<Task[]>
    getTaskOfUser(user_id: string, task_id: string): Promise<Task>
    updateTaskOfUser(user_id: string, task_id: string): Promise<Task>
    deleteTaskOfUser(user_id: string, task_id: string): Promise<Task>
}