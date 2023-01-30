///<reference types="Cypress"/>

const endPoint = 'http://localhost:3000/api/posts';
const fileName = 'cypress/fixtures/ReadWriteFixture/readWrite.json';

describe('Write/Read Fixture Demo', () => {
    

    it('Write an API RESPONSE to a fixture file', () => {
        cy.request('GET', endPoint)
        .then(response=>{
            // cy.log(response.body)
            cy.writeFile(fileName, response.body)
        })
    });

    it('Adding more objects to our array of responses', () => {
        
        cy.request('GET', endPoint)
        .its('body.posts')
        .each($object=>{
        cy.readFile(fileName, 'utf8').then(fileContent => {
            let obj = JSON.parse(fileContent);
            obj.push($object);
            cy.writeFile(fileName, JSON.stringify(obj));
        });
        })
    });

});