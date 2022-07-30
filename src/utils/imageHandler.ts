import sharp from "sharp";
import { imageGetParams } from "./IimageGetParams";
import { fullPath, thumbPath ,thumbsLocation} from './fileHandler';
import {existsSync,mkdirSync} from 'fs';

/**
 * Processing Image via get parameters
 * @param {imageParams}params get parameters
 * @returns Returns Error Meassage if failed
 */
export async function scaleImage(params: imageGetParams) {
 try {
  


if (!existsSync(thumbsLocation)){
    mkdirSync(thumbsLocation);
}

    await sharp(fullPath(params))
        .resize(+params.w!, +params.h!).toFormat('jpeg')
        .toFile(thumbPath(params));
       
 } catch (error) {
    return `Problem Processing Provided image.<br/>${error}`
 }  
 return null;
};
