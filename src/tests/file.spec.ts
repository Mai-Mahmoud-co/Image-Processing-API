import {imageExist} from '../file';
describe('Testing File module',()=>{
    
    it('imageExist should return false with non existing image',()=>{
        expect(imageExist({filename:'photo1234'})).toBeFalsy;
    });

    it('imageExist should return true with non existing image',()=>{
        expect(imageExist({filename:'icelandwaterfall'})).toBeTruthy;
    });

})