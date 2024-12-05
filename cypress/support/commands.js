Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Carlos');
    cy.get('#lastName').type('Roberto');
    cy.get('#email').type('carlosrobertoaj@gmail.com');
    cy.get('#phone').type('997899699');
    cy.get('#open-text-area').type('teste teste');
    cy.get('button[type="submit"]').click();
  });
  
