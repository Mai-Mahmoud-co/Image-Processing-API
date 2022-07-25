### Intro
Simple Image scaling API that makes use of sharp package 

### Parameters
* name : name of the image
* w : width of the image
* H : Height of th Image

### Correct Usage Examples 

* With Scaling:

(/getImage?name=icelandwaterfall&w=200&h=200)

will return the image scaled to 200 * 200

* Without Scaling :

(/getImage?name=icelandwaterfall)

will return the Original image

### Incorrect Usage Examples

* With one dimension:

(/getImage?name=icelandwaterfall&w=200)

will return 400 bad request

* Without name parameter :

(/getImage)

will return 400 bad request

### Scripts to run the project

* ```npm install``` : to install dependancies
* ```npm run build``` : to build project
* ```npm run test``` : to start jasmine tests
* ```npm run start```: to start the project
* ```npm run start:prod``` : to start the built project 