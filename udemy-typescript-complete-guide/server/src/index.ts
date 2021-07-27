import express, { Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import { AppRouter } from './AppRouter';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({ keys: ['laskdjf'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});