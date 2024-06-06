import express from 'express'
import { createTaskOfUserController, createUserController, getAllTasksOfUserController, getTaskOfUserController } from '../controller/task.controller'

const router = express.Router();

router.post('/users', (req,res) => createUserController(req, res));
router.post('/users/:user_id/tasks', (req,res) => createTaskOfUserController(req, res));
router.get('/users/:user_id/tasks', (req,res) => getAllTasksOfUserController(req,res));
router.get('/users/:user_id/tasks/:task_id', (req,res) => getTaskOfUserController(req,res));

export default router;