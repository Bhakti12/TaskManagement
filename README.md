# Task Management System

You are required to build a simplified version of a task management web application SaaS. The application should allow users to create, update, delete, and list tasks. Each task will have a title, description, due date, and status (e.g., "To Do," "In Progress," "Done"). The application should support multiple users, with each user having their own set of tasks.

### Backend :
Typescript (Effect library : https://effect.website/) <br>

To locally run backend : <br>

- Install npm packages **npm install** in terminal <br>
- Write **npm start** in terminal <br>
### Test : 
Jest
For run test simply write **npm test** in terminal



### Architecture : 

![image](https://github.com/Bhakti12/TaskManagement/assets/52093953/8de8d6c8-866f-46b4-b90b-8bfbad34beb0)

- I divide codebase in modules for increase modularity. Each module has a specific responsibility, making it easier to understand and maintain the code.Modularity also promotes code reusability, as modules can be easily reused in different parts of the application or in future projects.<br>
- Each component (repository, service, controller, etc.) focuses on a specific aspect of the application's functionality.<br>
- Repository directory typically holds files responsible for database interaction.<br>
- Service directory contains business logic for specific function.<br>
- Controller directory contains files responsible for handling HTTP requests and generating HTTP responses.<br>
- Route directory defines API routes and connects them to controller methods.<br>
- Types directory contains TypeScript type definitions or interfaces related to tasks.<br> 
- Tests directory holds test suites for the application.

  #### Advantages of this architecture :

  - Modularity : Divided into separate modules, also it is resuable
  - Testability : The architecture promotes testability by separating business logic from external dependencies such as the database or HTTP layer. Unit tests can be written for individual modules such as services and controllers, while integration tests can verify interactions between modules.
  - Flexibility and Scalability :  New features can be added or existing ones modified without affecting other parts of the application.
  - Maintainability :  Promoting code organization and readability of code, With clear separation of concerns and well-defined module boundaries, developers can quickly locate and modify code related to specific functionalities.
  - Clarity and Consistency :  Developers can easily understand the structure of the application and know where to find specific functionalities.

### API : 

- `POST /users`: Create a new user.
- `POST /users/:user_id/tasks`: Create a new task for the specified user.
- `GET /users/:user_id/tasks`: Retrieve all tasks for the specified user.
- `GET /users/:user_id/tasks/:task_id`: Retrieve a specific task for the specified user.
- `PUT /users/:user_id/tasks/:task_id`: Update a specific task for the specified user.
- `DELETE /users/:user_id/tasks/:task_id`: Delete a specific task for the specified user.
