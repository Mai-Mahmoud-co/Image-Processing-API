import  { Router, Request, Response  } from 'express';
import { getimage_route } from './getImage';
const routes = Router();

routes.get('/',(_req:Request,res:Response)=>
{
    res.send('Welcome to Image Processing Api');
});
routes.use('/getImage',getimage_route);

export default routes;