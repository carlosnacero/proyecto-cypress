import { LoginPage } from "./LoginPage";
    
describe('test', ()=>{
    it('test', ()=>{
     cy.visit('https://www.demoblaze.com')
     LoginPage.linlDeLogin.click();
  
    cy.wait (10000)
   
   })
   
   })