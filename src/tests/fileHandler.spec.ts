import {imageExist} from '../utils/fileHandler';
describe('Testing File module',()=>{
    
    it('imageExist should return false with non existing image',()=>{
        expect(imageExist({name:'photo1234'})).toBeFalsy;
    });

    it('imageExist should return true with non existing image',()=>{
        expect(imageExist({name:'icelandwaterfall'})).toBeTruthy;
    });

})