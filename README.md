Task Management System API

Backend : Typescript (Effect library : https://effect.website/)

API : 

- `POST /users`: Create a new user.

**Request :** 

{
    "name":"Bhakti",
    "email":"sanghanibhakti922@gmail.com",
    "password":"123456",
    "tasks":[]
}

**Response :** 

{
    "code": 200,
    "status": "OK",
    "message": "added successfully",
    "data": {
        "name":"Bhakti",
        "email":"sanghanibhakti922@gmail.com",
        "password":"123456",
        "tasks":[]
    }
}

- `POST /users/:user_id/tasks`: Create a new task for the specified user.
- `GET /users/:user_id/tasks`: Retrieve all tasks for the specified user.
- `GET /users/:user_id/tasks/:task_id`: Retrieve a specific task for the specified user.
- `PUT /users/:user_id/tasks/:task_id`: Update a specific task for the specified user.
- `DELETE /users/:user_id/tasks/:task_id`: Delete a specific task for the specified user.

Test : Jest
