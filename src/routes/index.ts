import  { Router, Request, Response  } from 'express';
import { images_routes } from './api/images';
const routes = Router();

routes.get('/',(_req:Request,res:Response)=>
{
    res.send('Welcome to Image Processing Api');
});
routes.use('/images',images_routes);

export default routes;