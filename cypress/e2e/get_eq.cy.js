describe('login', ()=>{
    it.only('eq', ()=>{
     cy.visit('https://sitio.cruzblanca.cl/MICRUZBLANCA/login.aspx?_ga=2.202845073.1466241737.1688511533-861998310.1688151215')
     cy.get('.inputCruz').eq(-4).type('1234')
     
   
   })
   
   })