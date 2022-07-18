/// <reference types="cypress" />

const faker = require('faker')


describe("Access Valtech's page", () => {
    beforeEach(() => {   
       
})
for (let mobileDeviceValue in data.mobiledevicesname) {  
  it(
    "Access Valtech's page with different mobile devices, such as: " + " " +          // Initial test frase, plus the version of mobile to be tested
       data.mobiledevicesname [mobileDeviceValue] + " . " +                               
        " Confirm that you are on the Valtech page and fill in the contact form",
  function () {
    
    cy.viewport(data.mobiledevicesname[mobileDeviceValue])                                  //command invoking mobile device name plus mobile device value
    cy.visit(Cypress.env('url'))   
    
    cy.wait(4000)
    cy.title().should('be.equal', 'Agência digital focada em tecnologia e inovação')
    
    cy.get('#CybotCookiebotDialogBodyButtonAcceptAll').click({force: true})
    cy.get('.icon-search').click()
    
    cy.wait(4000)
    cy.get('.contact-us-form__accordion-button > svg').click({force: true})
    
    //filling the contact form
    cy.wait(500)
    cy.get('#FirstName').type('Camila', {force: true})
    cy.get('#LastName').type('Santos', {force: true})
    cy.get('#Lead_title__c').select('Other', {force: true})
    cy.get('#Email').type(`${faker.random.uuid()}-@hotmail.com`, {force: true})  //using faker
    cy.get('#Company').type('Valtech', {force: true})
    cy.get('#Email').scrollIntoView()
    cy.get('#Industry').select('Technology', {force: true})
    cy.get('#CountryCode').select('Brazil', {force: true})
    cy.get('#mKTOWhyContact').select('Work at Valtech', {force: true})
    cy.get('#commentCapture').type("Thank you, Valtech!!!!!", {force: true})
    cy.wait(3000)
   
      })   
    }
  })  


  



