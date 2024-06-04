describe('login', ()=>{
    it('be checked', ()=>{
     cy.visit('https://the-internet.herokuapp.com/checkboxes')
     cy.get('input[type="checkbox"]').eq(1).should('be.checked')

 })
   
   })