import supertest from 'supertest';
import app from "..";
import { thumbExist } from '../utils/fileHandler';
import { imageGetParams } from '../utils/IimageGetParams';

const request = supertest(app);

describe('Testing the images endpoint',()=>{

    it('Using the endpoint without providing the name parameter returns 400', async () => {
        await request.get('/getImage').expect(400);
      });
    
      it('Using the endpoint with a non-existent Image returns 404', async () => {
        await request.get('/getImage?name=photo1234').expect(404);
      });

      it('Using the endpoint with a wrong width parameters returns 400', async () => {
        await request.get('/getImage?name=fjord&w=long&h=200').expect(400);
      });

      it('Using the endpoint with a missing one dimenssion returns 400', async () => {
        await request.get('/getImage?name=fjord&h=200').expect(400);
      });

      it('Using the endpoint without dimenssions returns 200', async () => {
        await request.get('/getImage?name=fjord').expect(200);
      });
      const params:imageGetParams={name:'palmtunnel',w:'200',h:'200'};

      it('Thumbnail not existing before the first run',()=>{
        expect(thumbExist(params)).toBeFalsy;
    });



      it('Using the endpoint with a valid image file name and dimenssions returns 200 and call processImage to create thumbnail', async () => {
        await request.get('/getImage?name=palmtunnel&w=200&h=200').expect(200);
      });
      
    
})