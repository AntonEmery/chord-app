import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))
app.use(routes);


app.listen(3000, () => console.log('listening on port 3000'));
