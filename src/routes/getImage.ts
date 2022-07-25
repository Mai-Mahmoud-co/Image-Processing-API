import { Router, Request, Response, } from 'express';
import { validateImageParams } from '../utils/validation';
import { imageExist, thumbExist, thumbPath } from '../utils/fileHandler';
import { scaleImage } from '../utils/imageHandler';
import { imageGetParams } from '../utils/IimageGetParams';



export const getimage_route = Router();
getimage_route.get('/', async (req: Request, res: Response) => {

//get Request parameters
  const params:imageGetParams = req.query;

//Validate get parameters
  const validation = validateImageParams(params);
  if (validation.valid == false) {
    return res.status(400).send(validation.message);
  }

  //Check If Image file exists
  if (imageExist(params) == false) {
    return res.status(404).send("Image file Not Found");
  }

    //Check If thumbnail exists,
    //create thumbnail with provided parameters if not existing
  if (thumbExist(params) == false) {
    console.log(`Creating Thumbnail at ${thumbPath(params)}`);
    const result = await scaleImage(params);
    if (result != null) {
      return res.status(500).send(result)
    }
  }

      //Send the thumbnail to the response 
  console.log(`Sending photo at ${thumbPath(params)}`)
  return res.sendFile(thumbPath(params));



});

