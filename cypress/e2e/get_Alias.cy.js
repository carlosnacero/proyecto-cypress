describe('login', ()=>{
    it('Alias', ()=>{
     cy.visit('https://sitio.cruzblanca.cl/MICRUZBLANCA/login.aspx?_ga=2.202845073.1466241737.1688511533-861998310.1688151215')
     cy.get('#UserName').as('username')
     cy.get('#Password').as('password')
     cy.get('#LkinicioSession').click

     cy.get('@username').type('26840983-1')
     cy.get('@password').type('8171')
   
   })
   
   })