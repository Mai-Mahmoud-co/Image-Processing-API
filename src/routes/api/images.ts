import { Router, Request, Response, } from 'express';
import { validateImageParams } from '../../validation';
import { imageExist, thumbExist, thumbPath } from '../../file';
import { processImage } from '../../imageProcessor';
import { imageParams } from '../../imageParams';
export const images_routes = Router();
images_routes.get('/', async (req: Request, res: Response) => {

//get Request parameters
  const params:imageParams = req.query;

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
    const result = await processImage(params);
    if (result != null) {
      return res.status(500).send(result)
    }
  }

      //Send the thumbnail to the response 
  console.log(`Sending photo at ${thumbPath(params)}`)
  return res.sendFile(thumbPath(params));



});

