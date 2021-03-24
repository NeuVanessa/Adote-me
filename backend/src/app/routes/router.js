import { Router } from 'express';
import UserControl from '../controller/user';
import AnimalControl from '../controller/animal';

const router = new Router();

const routerUser = new UserControl();
router.get('/home', routerUser.get);
router.post('/home/menu', routerUser.post);


const routerAnimal = new AnimalControl();
router.get('/home/menu', routerAnimal.get);
router.post('/home/menu/sign', routerAnimal.post);

export default router;