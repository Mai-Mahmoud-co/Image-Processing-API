import { existsSync } from "fs";
import path from "path";
import { imageParams } from "./imageParams";

//Images Locations 
const fullLocation: string = path.resolve('images', 'full');
const thumbsLocation: string = path.resolve('images', 'thumbs');

//Check If Image file Exists
export const imageExist = (params: imageParams) => {
    return existsSync(fullPath(params));
};

//Check If thumbnail file Exists
export const thumbExist = (params: imageParams) => {
    return existsSync(thumbPath(params));
};

//Get Path of the original Image
export const fullPath = (params: imageParams) => {
    { return path.resolve(fullLocation, `${params.filename}.jpg`); }
};

//Get Path of thumbnail Image 
export const thumbPath = (params: imageParams) => {
    if (params.width == undefined && params.height == undefined) {
        return fullPath(params);
    }
    return path.resolve(thumbsLocation, `${params.filename}_${params.width}_${params.height}.jpg`);
};


