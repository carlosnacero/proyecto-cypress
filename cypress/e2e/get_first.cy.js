describe('login', ()=>{
    it('first', ()=>{
     cy.visit('https://sitio.cruzblanca.cl/MICRUZBLANCA/login.aspx?_ga=2.202845073.1466241737.1688511533-861998310.1688151215')
     cy.get('.inputCruz').first().type('hola')
     cy.wait(10000)
   
   })
   
   })