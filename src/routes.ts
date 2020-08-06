import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesController();

routes.get('/', (request, response) => {
  return response.json({ message: 'This API Works!' });
});

routes.post('/classes', classesControllers.create);

routes.post('/classes', classesControllers.index);

export default routes;
