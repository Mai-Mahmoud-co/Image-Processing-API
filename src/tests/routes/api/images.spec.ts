import supertest from 'supertest';
import app from "../../..";
import { thumbExist } from '../../../file';
import { imageParams } from '../../../imageParams';
import { processImage } from '../../../imageProcessor';
const request = supertest(app);

describe('Testing the images endpoint',()=>{

    it('Using the endpoint without providing the name parameter returns 400', async () => {
        await request.get('/images').expect(400);
      });
    
      it('Using the endpoint with a non-existent Image returns 404', async () => {
        await request.get('/images?filename=photo1234').expect(404);
      });

      it('Using the endpoint with a wrong width parameters returns 400', async () => {
        await request.get('/images?filename=fjord&width=long&height=200').expect(400);
      });

      it('Using the endpoint with a missing one dimenssion returns 400', async () => {
        await request.get('/images?filename=fjord&height=200').expect(400);
      });

      it('Using the endpoint without dimenssions returns 200', async () => {
        await request.get('/images?filename=fjord').expect(200);
      });
      const params:imageParams={filename:'palmtunnel',width:'200',height:'200'};

      it('Thumbnail not existing before the first run',()=>{
        expect(thumbExist(params)).toBeFalsy;
    });



      it('Using the endpoint with a valid image file name and dimenssions returns 200 and call processImage to create thumbnail', async () => {
        await request.get('/images?filename=palmtunnel&width=200&height=200').expect(200);
      });
      
    
})