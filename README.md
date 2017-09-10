# node-js clinic API

## Synopsis

This is an API built using NodeJS. It allows a client to retrieve clinic information in the UK based on a UK postcode or a UK city. 

Currently the data being used is a subset of example data taken from data.gov.uk.

## Technologies Used

* NodeJS
* Express
* Chai
* Mocha
* Babel

## Build & development

After cloning the repo, go into the root folder of the project and:

* Run `npm install`

* Run `npm start`

* Go to [localhost:3000/clinics/postcode/cr0 6SD](localhost:3000/clinics/postcode/cr0 6SD) to test the postcode api

* Go to [localhost:3000/clinics/city/Croydon](localhost:3000/clinics/city/Croydon) to test the city api

## Testing

* Running `npm test` will run the unit tests with mocha and chai.