describe('login', ()=>{
    it('closest', ()=>{
     cy.visit('https://www.saucedemo.com/')
     cy.get('#user-name').closest('#login_button_container').then(parent=>{
       cy.log(parent.attr('class'))

     })
   cy.wait (10000)
   
   })
   
   })