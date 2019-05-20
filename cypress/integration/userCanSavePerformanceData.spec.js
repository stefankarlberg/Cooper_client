describe('User can log in', () => {
  
  beforeEach(function() {
    cy.visit('http://localhost:3001');
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/performance_data',
      response: 'fixture:saving_entry_response.json'
    })
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/sign_in',
      response: 'fixture:login.json',
      headers: {
        "uid": "user@mail.com"
      }
    })
    cy.get('#login').click();
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('password')
      cy.get('button').click()
    })
  })

  it('successfully', () => {
    cy.get('#cooper').click()
    cy.get('input[id="distance"]').type('1000')
    cy.get('select[id="gender"]').select('female')
    cy.get('input[id="age"]').type('23')
    cy.get('#save-result').click()
    cy.contains('Your entry was saved')
  })

  it('can save two different entries', () => {
    cy.get('#cooper').click()
    cy.get('input[id="distance"]').type('1000')
    cy.get('select[id="gender"]').select('female')
    cy.get('input[id="age"]').type('23')
    cy.get('#save-result').click()
    cy.contains('Your entry was saved')
    cy.get('input[id="distance"]')
      .clear()
      .type('1500')
    cy.get('#save-result').click()
    cy.contains('Your entry was saved')
  })
})