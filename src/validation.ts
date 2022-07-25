import { imageParams } from "./imageParams";

/**
 * Validate get parameters
 * @param {imageParams}params get Parameters
 * @returns {boolean,  string } Returns weather the input is valid or not and the error message
 */
export const validateImageParams = (params: imageParams): { valid: boolean, message: string } => {

//check if filename is undefined
    if (params.filename == undefined) {
        return { valid: false, message: 'Bad Request: filename Parameter Undefined' };
    }
    // check if no resize required
    if (params.width == undefined && params.height == undefined) {
        return { valid: true, message: '' };
    }
     // check if width is invalid


    if (params.width==undefined|| isNaN(+params.width) || +params.width < 1) {
        return { valid: false, message: 'Bad Request: width parameter not valid or Undefined' };
    }
         // check if height is invalid

    if (params.height == undefined ||isNaN(+params.height)||  +params.height < 1) {
        return { valid: false, message: 'Bad Request: height parameter not valid or Undefined' };
    }
    //get parameters is valid
    return { valid: true, message: '' };
}