/// <reference types='cypress'/>
var faker = require('faker');
const Faker = require('faker/lib');

describe('Funcionalidade Página de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve selecionar um produto na lista', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar o produto ao carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
            .contains('Atlas Fitness Tank')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

    });


});