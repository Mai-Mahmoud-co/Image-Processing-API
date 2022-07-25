### Scripts
- Install: ```npm install```
- Build: ```npm run build```
- Lint: ```npm run lint```
- prettier: ```npm run format```
- Run unit tests: ```npm run test```
- Start server: ```npm run start```
- start production ```npm run start:prod```

### Usage
The server will listen on port 3000:

#### Brief instructions
http://localhost:3000/

#### Endpoint to resize images
http://localhost:3000/api/images

Expected query arguments are:
- _filename_: Available filenames are:
  - encenadaport
  - fjord
  - icelandwaterfall
  - palmtunnel
  - santamonica
- _width_: numerical pixel value > 0
- _height_: numerical pixel value > 0


#### Example 1
http://localhost:3000/api/images?filename=fjord
Will display the original fjord image.

#### Example 2
http://localhost:3000/api/images?filename=fjord&width=200&height=200
Will scale the fjord image to 200 by 200 pixels and store the resulting image.
On subsequent calls will serve the resized image instead of resizing the
original again.

#### Example 3
http://localhost:3000/api/images?filename=fjord&width=-200&height=200
Invalid width parameter that will be hinted to.

#### Example 4
http://localhost:3000/api/images?filename=fjord&width=200
Missing height parameter that will be hinted to.

### Notes
- Images are served from `assets/images/full`. Further images with the extension
  can be put into that directory, but the filetype is not checked
  (not required in exercise).
- Image thumbs will be stored in `assets/images/thumb` and can be deleted from
  there to verify that in that case they will be re-created on subsequent calls
  to the same endpoint.
