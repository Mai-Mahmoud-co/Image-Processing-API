import {imageExist, thumbExist} from '../file';
import { imageParams } from '../imageParams';
import{processImage} from '../imageProcessor';

describe('Testing imageProcessor module',()=>{
    it('Failed operation handeled', async () => {
        const params:imageParams={filename:'palmtunnel',width:'20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',height:'200'};
        expect(processImage(params)!=null).toBeTruthy;
});
});