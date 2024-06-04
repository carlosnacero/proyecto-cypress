describe('login', ()=>{
    it('be visible', ()=>{
     cy.login('standard_user' , 'secret_sauce')
     cy.wait(5000)
   
   })
   
   })