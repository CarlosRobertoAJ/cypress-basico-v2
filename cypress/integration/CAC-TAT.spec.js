describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    // Visita a página com o caminho relativo ao baseUrl
    cy.visit('http://127.0.0.1:8080/index.html');
  });

  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
  });

  it('preenche os campos obrigatórios e envia o formulário', function() {
    const longText = 'TESTE TESTE TESTE TESTE TEST TES TE STE STE ST ES TET ET E T ET E TTE T ET E T ET  T';
    cy.get('#firstName').type('Carlos');
    cy.get('#lastName').type('Roberto');
    cy.get('#email').type('carlosrobertoaj@gmail.com');
    cy.get('#phone').type('997899699');
    cy.get('#open-text-area').type(longText, { delay: 0 }); // Remove vírgula extra
    cy.get('button[type="submit"]').click();
    cy.get('.success').should('be.visible');
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    const longText = 'TESTE TESTE TESTE TESTE TEST TES TE STE STE ST ES TET ET E T ET E TTE T ET E T ET  T';
    cy.get('#firstName').type('Carlos');
    cy.get('#lastName').type('Roberto');
    cy.get('#email').type('carlosrobertoaj@gmail,com'); // Email com vírgula (inválido)
    cy.get('#phone').type('997899699');
    cy.get('#open-text-area').type(longText, { delay: 0 }); // Remove vírgula extra
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('be.visible'); // Verifica se a mensagem de erro está visível
  });
  it('campo telefone continua vazio quando preenchido com valor nao-numerico', function() {
    cy.get('#phone')
      .type('abdcdeijia')
        .should('have.value', '');
  });
  it('Exibe classe error se nao preencher campo obrigatorio telefone', function() {
    const longText = 'TESTE TESTE TESTE TESTE TEST TES TE STE STE ST ES TET ET E T ET E TTE T ET E T ET  T';
    cy.get('#firstName').type('Carlos');
    cy.get('#lastName').type('Roberto');
    cy.get('#email').type('carlosrobertoaj@gmail.com'); // Email com vírgula (inválido)
    cy.get('#phone-checkbox').check();
    cy.get('#open-text-area').type(longText, { delay: 0 }); // Remove vírgula extra
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('be.visible');
  })
  it('preenca e limpe os campos nome e sobrenome', function() {
    cy.get('#firstName')
     .type('Carlos')
      .should('have.value', 'Carlos')
      .clear() //Mecanica para limpar campos
      .should('have.value', '');
});
it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
  cy.get('button[type="submit"]').click();
  cy.get('.error').should('be.visible');
});
it.only('envia o formulario com sucesso usando um comando customizado', () => {
 cy.fillMandatoryFieldsAndSubmit();
 cy.get('.success').should('be.visible');
});
});
