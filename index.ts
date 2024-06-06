import express from 'express'
import bodyParser from 'body-parser'
import { config } from './src/config/env'
import routers from './src/route/indexroute';

/* configuration using express*/

const app = express();
app.use(bodyParser.json());

app.listen(config.APP_PORT, () => {
    console.log('Server is running on port 3000')
});

app.use(routers.taskRouter);
/* configuration using effect*/

// const ServerLive = BunHttpServer.server.layer({port: config.APP_PORT});
// const helloWorldRoute = route.get("/", (_) => response.json({ message: "Hello, world!" }));

// // Create an HTTP server
// const httpServerLayer = pipe(
//     HttpServer.router.add(helloWorldRoute), // Add routes
//     HttpServer.serve, // Serve the HTTP server
//     Layer.fromManaged
// );

// // Merge all layers
// const dependencyLayer = Layer.mergeAll(httpServerLayer);

// // Launch the HTTP server
// BunRuntime.runMain(Layer.launch(dependencyLayer));