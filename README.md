Task Management System API

Backend : Typescript (Effect library : https://effect.website/)

APIs : 

- `POST /users`: Create a new user.
- `POST /users/:user_id/tasks`: Create a new task for the specified user.
- `GET /users/:user_id/tasks`: Retrieve all tasks for the specified user.
- `GET /users/:user_id/tasks/:task_id`: Retrieve a specific task for the specified user.
- `PUT /users/:user_id/tasks/:task_id`: Update a specific task for the specified user.
- `DELETE /users/:user_id/tasks/:task_id`: Delete a specific task for the specified user.

Test : Jest
