describe('login', ()=>{
    it('should', ()=>{
     cy.visit('https://www.saucedemo.com/')
     cy.get('.login_logo').should('have.text', 'Swag Labs' )
   

    
   cy.wait (1000)
   
   })
   
   })