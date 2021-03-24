import express from 'express';
import cors from 'cors';
//import handlebars from 'express-handlebars';
import database from '../database/mongo';
import router from './routes/router';

const app = express();

database.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(router);

export default app;
