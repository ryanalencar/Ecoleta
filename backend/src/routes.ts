import { Router } from 'express';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = Router();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes;
