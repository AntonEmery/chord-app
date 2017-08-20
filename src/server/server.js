import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import path from 'path';


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathToClient = path.join(__dirname, '..', 'client', 'build');

app.use(express.static(pathToClient));
app.use(routes);


app.listen(3000, () => console.log('listening on port 3000'));
