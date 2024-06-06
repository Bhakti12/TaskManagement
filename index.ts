import express from 'express'
import bodyParser from 'body-parser'
import { config } from './src/config/env'

const app = express();
app.use(bodyParser.json());

app.listen(config.APP_PORT, () => {
    console.log('Server is running on port 3000')
});