import { Router } from 'express';
import knex from './database/connection';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const pointsController = new PointsController();

const routes = Router();

routes.get('/items', async (req, res) => {
  const items = await knex('items').select('*');

  const serializedItems = items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });

  return res.json(serializedItems);
});

routes.post('/points', pointsController.create);

export default routes;
