describe('login' , ()=>{
it('contains' , ()=>{
cy.visit('https://www.saucedemo.com/')
cy.get('.login_logo').should('contain.text', 'wag' )

cy.wait(10000) 

})
})