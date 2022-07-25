import { validateImageParams } from '../validation';
describe('Testing File module', () => {

    it('validateImageParams should return false with no filename provided', () => {

        const result = validateImageParams({});
        expect(result.valid).toBeFalsy;
    });

    it('validateImageParams should return false with missing one dimenssion', () => {

        const result = validateImageParams({ filename: 'photo', width: '200' });
        expect(result.valid).toBeFalsy;
    });

    it('validateImageParams should return false with wrong dimenssion', () => {

        const result = validateImageParams({ filename: 'photo', width: 'long' , height:'200'});
        expect(result.valid).toBeFalsy;
    });

    it('validateImageParams should return true without any dimenssion', () => {

        const result = validateImageParams({ filename: 'photo' });
        expect(result.valid).toBeTrue;
    });

    it('validateImageParams should return true with valid dimenssions', () => {

        const result = validateImageParams({ filename: 'photo', width: '300' , height:'200'});
        expect(result.valid).toBeTrue;
    });
})