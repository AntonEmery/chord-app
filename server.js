import express from 'express';
import routes from './routes.js';


let app = express();
app.set('view engine', 'ejs');

app.use(routes);


app.listen(3000, () => console.log('listening on port 3000'));
