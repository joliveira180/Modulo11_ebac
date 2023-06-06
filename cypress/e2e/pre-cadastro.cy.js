/// <reference types='cypress'/>
var faker = require('faker');
const Faker = require('faker/lib');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')  
        
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve efetuar o pré cadastro com sucesso', () => {
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.internet.email(firstName, lastName)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });

    it('Deve apresentar erro quando o email está ausente no pré cadastro', () => {
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.internet.email(firstName, lastName)


        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('#account_email').clear()
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail é um campo obrigatório.')
    });
    
});