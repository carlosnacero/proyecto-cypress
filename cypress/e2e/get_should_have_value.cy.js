describe('login', ()=>{
    it('should_value', ()=>{
     cy.visit('https://www.saucedemo.com/')
     cy.get('#user-name').type('hola')
     cy.get('#user-name').should('have.value', 'hola' )
  
    cy.wait (1000)
   
   })
   
   })