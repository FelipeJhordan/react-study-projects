describe("Testa a página de Dashboard", () => {
    it("Deve carregar uma lista com 2 pokemons", () => {
        cy.visit("/dashboard")

        cy.intercept('GET', 'http://localhost:3000/pokemon', { 
            fixture: "pokemons.json"
        })

        cy.contains("ivysaur")
        cy.contains("bulbasaur")
    })
    it("Quando clicar em um pokemon deve abrir a página de detalhes", () => {
        cy.visit("/dashboard")

        cy.intercept('GET', 'http://localhost:3000/pokemon', { 
            fixture: "pokemons.json"
        })
        cy.intercept('GET', 'http://localhost:3000/pokemon/1', { 
            fixture: "pokemon-detail.json"
        })

        cy.contains("bulbasaur").click()
        cy.contains("bulbasaur")
    })
    it("Quando clicar em um pokemon deve abrir a página de detalhes e depois voltar para listagem para 3 pokemons", () => {
        cy.visit("/dashboard")

        cy.intercept('GET', 'http://localhost:3000/pokemon', { 
            fixture: "pokemons.json"
        })
        cy.intercept('GET', 'http://localhost:3000/pokemon/1', { 
            fixture: "pokemon-detail.json"
        })

        cy.contains("bulbasaur").click()
        cy.contains("Voltar").click()
        cy.contains("ivysaur")
    })
    it("Quando clicar em um pokemon deve abrir a página de detalhes e depois voltar para listagem para 3 pokemons", () => {
        cy.visit("/dashboard")

        cy.intercept('GET', 'http://localhost:3000/pokemon', { 
            fixture: "pokemons.json"
        })

        cy.get("div").find("ul").should("have.css", "display").and("match", /grid/)
       
    })
    it("Devem haver 2 pokemons na tela com li´s", () => {
        cy.visit("/dashboard")

        cy.intercept('GET', 'http://localhost:3000/pokemon', { 
            fixture: "pokemons.json"
        })

        cy.get("div").find("li").should($li => {
            expect($li).to.have.length(2)

            const bulbasaur = $li[0]
            const ivysaur = $li[1]

            expect(bulbasaur.textContent).to.contain('bulbasaur')
            expect(ivysaur.textContent).to.contain('ivysaur')
        })
       
    })
})