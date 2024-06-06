export type TaskStatus = 'To-DO' | 'In-Progress' | 'DONE';

export declare type Task = {
    id?: string;
    title: string;
    description: string;
    date: string;
    status: TaskStatus;
};

export declare type User = {
    id?: string;
    name: string;
    email: string;
    password: string;
    tasks: Task[];
};