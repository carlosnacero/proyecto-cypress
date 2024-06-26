export class LoginElements {
    static get textboxes(){
     return {
      get usaername(){
        return cy.get('input#loginusername');
   },
      get usaername(){
        return cy.get('input#loginpassword');
   },
     };
    }


    static get buttons(){
     return {
      get close(){
       return cy.get('div[id="logInModal"] button').eq(1);
  },
     get login(){
       return cy.contains('button', 'Log in');
  },
    };
   }
}