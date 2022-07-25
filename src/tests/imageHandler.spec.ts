import { imageGetParams } from '../utils/IimageGetParams';
import{scaleImage} from '../utils/imageHandler';

describe('Testing imageProcessor module',()=>{
    it('Failed operation handeled', async () => {
        const params:imageGetParams={name:'palmtunnel',w:'20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',h:'200'};
        expect(scaleImage(params)!=null).toBeTruthy;
});
});