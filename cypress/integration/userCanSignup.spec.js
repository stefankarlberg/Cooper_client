describe('User can sign up', () => {
  it('successfully', () => {
    cy.visit('http://localhost:3001');
    cy.get('#signup').click();
    cy.get('#signup-form').within(() => {
      cy.get('#email').type('user@mail10.com')
      cy.get('#password').type('password')
      cy.get('#password_confirmation').type('password')
      cy.get('button').click()
    })
    cy.contains('Hi user@mail10.com')
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })

  // it('with invalid credentials', () => {
  //   cy.visit('http://localhost:3001');
  //   cy.get('#login').click();
  //   cy.get('#login-form').within(() => {
  //     cy.get('#email').type('user@mail2.com')
  //     cy.get('#password').type('')
  //     cy.get('#password_confirmation').type('password')
  //     cy.get('button').click()
  //   })
  //   cy.contains('Invalid signup credentials. Please try again.')
  // })

})
