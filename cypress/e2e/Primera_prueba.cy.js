describe('login', ()=>{
 it('Login', ()=>{
  cy.visit('https://sitio.cruzblanca.cl/MICRUZBLANCA/login.aspx?_ga=2.202845073.1466241737.1688511533-861998310.1688151215')
  cy.get('#UserName').type('26840983-1')
  cy.get('#Password').type('8171')
  cy.get('#LkinicioSession').click

})

})

