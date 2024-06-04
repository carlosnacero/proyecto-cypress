describe('login' , ()=>{
    it('contains' , ()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('hermano')
    cy.get('#user-name').should('contain.value', 'he' )
    
    cy.wait(10000) 
    
    })
    })