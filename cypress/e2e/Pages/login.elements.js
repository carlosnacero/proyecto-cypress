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
}
