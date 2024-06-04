describe('login', ()=>{
    it('find', ()=>{
     cy.visit('https://sitio.cruzblanca.cl/MICRUZBLANCA/login.aspx?_ga=2.202845073.1466241737.1688511533-861998310.1688151215')
     cy.get('.form-horizontal').find('#UserName').should('exist')
     
   
   })
   
   })