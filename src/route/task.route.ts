import express from 'express'
import { createTaskOfUserController, createUserController, deleteTaskOfUserController, getAllTasksOfUserController, getTaskOfUserController, updateTaskOfUserController } from '../controller/task.controller'

const router = express.Router();

router.post('/users', (req,res) => createUserController(req, res));
router.post('/users/:user_id/tasks', (req,res) => createTaskOfUserController(req, res));
router.get('/users/:user_id/tasks', (req,res) => getAllTasksOfUserController(req,res));
router.get('/users/:user_id/tasks/:task_id', (req,res) => getTaskOfUserController(req,res));
router.put('/users/:user_id/tasks/:task_id', (req,res) => updateTaskOfUserController(req, res));
router.delete('/users/:user_id/tasks/:task_id', (req, res) => deleteTaskOfUserController(req, res));

export default router;