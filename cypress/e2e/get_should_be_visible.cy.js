describe('login', ()=>{
    it('be visible', ()=>{
     cy.visit('https://www.saucedemo.com/')
     cy.get('#user-name').type('standard_user')
     cy.get('#password').type('secret_sauce')  
     cy.get('#login-button').click()
     cy.get('#react-burger-menu-btn').click()
     cy.get('.bm-menu-wrap').should('be.visible')

     cy.wait(10000)
   
   })
   
   })