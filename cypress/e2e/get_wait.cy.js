describe('login', ()=>{
    it('wait', ()=>{
     cy.visit('https://accounts.shopify.com')
     cy.get('img [alt="log in to shopify"]', {timeout: 10000}).click()

 })
   
   })