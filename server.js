import express from 'express';
import routes from './routes.js';


let app = express();

app.use(express.static('public'))
app.use(routes);


app.listen(3000, () => console.log('listening on port 3000'));
