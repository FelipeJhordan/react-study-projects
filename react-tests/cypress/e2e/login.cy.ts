describe('Testa a página de login', () => {
  it('Quando clicar em login deve ir para página de Dashboard', () => {
    cy.visit('/')
    
    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json"
    })

    cy.contains("Login").click()
    cy.contains("Dashboard")
  })

  it("Quando clicar em login deve ir para página de Dashboard e ter um pokemon Ivyssauro", () => { 
    cy.visit('/')
    
    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json"
    })

    cy.contains("Login").click()
    cy.contains("ivysaur")
  })
  it("Quando clicar em Sign Up deve ir para página de cadastro", () => { 
    cy.visit('/')
    
    cy.contains("Não tem cadastro? Clique aqui!").click()

    cy.contains("Cadastre-se")
  })
})