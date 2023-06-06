/// <reference types='cypress' />


describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        let alunoEmailOk = 'aluno_ebac@teste.com'
        let alunoSenhaOk = 'teste@teste.com'

        cy.get('#username').type(alunoEmailOk)
        cy.get('#password').type(alunoSenhaOk)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', "Minha conta")
    });

    it('Deve exibir uma mensagem de erro ao insrir um usuário inválido', () => {

        let alunoEmailNok = 'lalala@teste.com'
        let alunoSenhaOk = 'teste@teste.com'

        cy.get('#username').type(alunoEmailNok)
        cy.get('#password').type(alunoSenhaOk)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')

    })

    it('Deve exibir uma mensagem de senha inválida', () => {
        let alunoEmailOk = 'aluno_ebac@teste.com'
        let alunoSenhaNok = 'teste'

        cy.get('#username').type(alunoEmailOk)
        cy.get('#password').type(alunoSenhaNok)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
    })

});