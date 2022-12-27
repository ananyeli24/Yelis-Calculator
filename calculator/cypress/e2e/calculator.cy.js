 //<reference types="cypress" />
    
   describe('my calc app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
      it('display Anas Amazing Stuff', () => {
          cy.title().should('include', 'Anas Amazing Stuff')
      })
      it('has an awesome title', () => {
        cy.get('[data-test="awesome-title"]').should('include.text','Anas Calculator')
      })
      it('should add two numbers',  () => {
        cy.get('[data-cy=button5]').click();
        cy.get('[data-cy=buttonSum]').click();
        cy.get('[data-cy=button8]').click();
        cy.get('[data-cy=buttonEquals]').click();
        cy.get('[data-cy=result]').should('have.value', '13')
    });
    it('should add decimal numbers',  () => {
      cy.get('[data-cy=button5]').click();
      cy.get('[data-cy=buttonDecimal]').click();
      cy.get('[data-cy=button3]').click();
      cy.get('[data-cy=buttonSum]').click();
      cy.get('[data-cy=button8]').click();
      cy.get('[data-cy=buttonDecimal]').click();
      cy.get('[data-cy=button2]').click();
      cy.get('[data-cy=buttonEquals]').click();
      cy.get('[data-cy=result]').should('have.value', '13.5')
  });
    it('should subtract two numbers', () => {
      cy.get('[data-cy=button5]').click();
      cy.get('[data-cy=buttonSubtract]').click();
      cy.get('[data-cy=button3]').click();
      cy.get('[data-cy=buttonEquals]').click();
      cy.get('[data-cy=result]').should('have.value', '2')
  });
  it('should multiply two numbers', () => {
    cy.get('[data-cy=button5]').click();
    cy.get('[data-cy=buttonMultiply]').click();
    cy.get('[data-cy=button4]').click();
    cy.get('[data-cy=buttonEquals]').click();
    cy.get('[data-cy=result]').should('have.value', '20')
  });
  it('should divide two numbers', () => {
    cy.get('[data-cy=button8]').click();
    cy.get('[data-cy=buttonDivide]').click();
    cy.get('[data-cy=button2]').click();
    cy.get('[data-cy=buttonEquals]').click();
    cy.get('[data-cy=result]').should('have.value', '4')
  });
//   it ('should get the percentage', () => {
//     cy.get('[data-cy=button8]').click();
//     cy.get('[data-cy=buttonPercentage]').click();
//     cy.get('[data-cy=buttonEquals]').click();
//     cy.get('[data-cy=result]').should('have.value', '0.08')
//   })
//   it ('should change sign', () => {
//     cy.get('[data-cy=button5]').click();
//     cy.get('[data-cy=buttonSigned]').click();
//     cy.get('[data-cy=buttonEquals]').click();
//     cy.get('[data-cy=result]').should('have.value', '-5')
//   })
  it ('should get error when dividing by no value', () => {
    cy.get('[data-cy=button5]').click();
    cy.get('[data-cy=buttonDivide').click();
    cy.get('[data-cy=buttonEquals]').click();
    cy.get('[data-cy=result]').should('have.value', 'Error')
  })
  afterEach(() => {
    cy.get('[data-cy=buttonClear]').click();
  });

  })