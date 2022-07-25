import { imageGetParams } from "./IimageGetParams";

/**
 * Validate get parameters
 * @param {imageParams}params get Parameters
 * @returns {boolean,  string } Returns weather the input is valid or not and the error message
 */
export const validateImageParams = (params: imageGetParams): { valid: boolean, message: string } => {

//check if filename is undefined
    if (params.name == undefined) {
        return { valid: false, message: 'Bad Request: filename Parameter Undefined' };
    }
    // check if no resize required
    if (params.w == undefined && params.h == undefined) {
        return { valid: true, message: '' };
    }
     // check if width is invalid


    if (params.w==undefined|| isNaN(+params.w) || +params.w < 1) {
        return { valid: false, message: 'Bad Request: width parameter not valid or Undefined' };
    }
         // check if height is invalid

    if (params.h == undefined ||isNaN(+params.h)||  +params.h < 1) {
        return { valid: false, message: 'Bad Request: height parameter not valid or Undefined' };
    }
    //get parameters is valid
    return { valid: true, message: '' };
}