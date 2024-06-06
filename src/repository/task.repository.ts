import { Task, User } from "../types/task";
import { v4 as uuidv4 } from 'uuid'

const tasks: Map<string, Task> = new Map();
const users: Map<string, User> = new Map();

//create user
export const createUserRepo = (user: User): any => {
    for(let user of users){
        console.log('.....',user);
    }
    const id = uuidv4();
    const addUser = users.set(id, user);
    console.log("after adding(add user)",addUser);
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
// export const getTaskOfUser = (user_id: string, task_id: string): Task => {

// };

//update task of specified user
// export const updateTaskOfUser = (user_id: string, task_id: string): Task => {

// };

//delete task of specified user
// export const deleteTaskOfUser = (user_id: string, task_id: string): Task => {

// };