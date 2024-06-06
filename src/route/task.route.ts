import express from 'express'
import bodyParser from 'body-parser'
import * as T from '@effect-ts/core/Effect'
import { GeneralError } from '../errors/GeneralError'
import { catchAllErrors } from '../config/errorhandler'
import { createTaskOfUserController, createUserController } from '../controller/task.controller'

const router = express.Router();

router.post('/users', (req,res) => createUserController(req, res));
router.get('/users/:user_id/tasks', (req,res) => createTaskOfUserController(req, res));

export default router;