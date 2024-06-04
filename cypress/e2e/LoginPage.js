export class LoginPage {
     static get linlDeLogin(){
      return cy.get('a[data-target="#logInModal"]')
    }
      
}