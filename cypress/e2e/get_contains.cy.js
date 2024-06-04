describe('login', ()=>{
    it('contains', ()=>{
     cy.visit('https://sitio.cruzblanca.cl/MICRUZBLANCA/login.aspx?_ga=2.202845073.1466241737.1688511533-861998310.1688151215')
     cy.contains('div', 'rut').then(title=>{
         cy.log(title.attr('class'));
        
     })

     cy.wait(10000)
   
   })
   
   })