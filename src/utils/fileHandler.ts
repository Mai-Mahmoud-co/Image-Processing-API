import { existsSync } from "fs";
import path from "path";
import { imageGetParams } from "./IimageGetParams";

//Images Locations 
const fullLocation: string = path.resolve('images', 'full');
export const thumbsLocation: string = path.resolve('images', 'thumbnails');

//Check If Image file Exists
export const imageExist = (params: imageGetParams) => {
    return existsSync(fullPath(params));
};

//Check If thumbnail file Exists
export const thumbExist = (params: imageGetParams) => {
    return existsSync(thumbPath(params));
};

//Get Path of the original Image
export const fullPath = (params: imageGetParams) => {
    { return path.resolve(fullLocation, `${params.name}.jpg`); }
};

//Get Path of thumbnail Image 
export const thumbPath = (params: imageGetParams) => {
    if (params.w == undefined && params.h == undefined) {
        return fullPath(params);
    }
    return path.resolve(thumbsLocation, `${params.name}_${params.w}_${params.h}.jpg`);
};


