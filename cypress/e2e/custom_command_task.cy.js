describe('Custom Task', () => {

  it('Register', () => {
    cy.Register()
  })

    it('Login', () => {
      cy.Login()
    })
  
    it('Products To Cart', () => {
      cy.ProductsToCart()
    })
  })