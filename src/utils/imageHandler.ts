import sharp from "sharp";
import { imageGetParams } from "./IimageGetParams";
import { fullPath, thumbPath } from './fileHandler';

/**
 * Processing Image via get parameters
 * @param {imageParams}params get parameters
 * @returns Returns Error Meassage if failed
 */
export async function scaleImage(params: imageGetParams) {

 try {
    await sharp(fullPath(params))
        .resize(+params.w!, +params.h!).toFormat('jpeg')
        .toFile(thumbPath(params));
       
 } catch (error) {
    return `Problem Processing Provided image.<br/>${error}`
 }  
 return null;
};
