import sharp from "sharp";
import { imageParams } from "./imageParams";
import { fullPath, thumbPath } from './file';

/**
 * Processing Image via get parameters
 * @param {imageParams}params get parameters
 * @returns {null|string}Returns Error Meassage if failed
 */
export   async function processImage(params: imageParams): Promise<null | string> 
{

    try {
        await sharp(fullPath(params))
            .toFormat('jpeg')
            .resize(+params.width!, +params.height!)
            .toFile(thumbPath(params));
        return null;
    } catch (error) {
        return `Problem Processing Provided image.<br/>${error}`;
    }
};
