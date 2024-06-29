import { fireEvent, render, screen } from "@testing-library/react"
import { faker } from '@faker-js/faker'

import Dashboard from "."
import { fetchPokemonList } from "../../services/PokemonService"

const mockFetchListPokemonFn = vi.fn(fetchPokemonList).mockImplementation(
    async () => {
        return [
            {
                id: 1,
                name: 'Pikachu',
                type: 'Eletrico',
                image: faker.image.urlPlaceholder()
            },
            {
                id: 2,
                name: 'Charmander',
                type: 'Fogo',
                image: faker.image.urlPlaceholder()
            }
        ]
    }
)

const navigateMock = vi.fn()

describe("Testa o component de Dashboard", ( ) => {
    vi.mock('react-router-dom', () => {
       return { useNavigate() {
            return navigateMock
        } 
    }
    })

    test("Deve haver um título escrito 'Dashboard'", async () => { 
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)
        
        const title = await screen.findByRole('heading')

        expect(title).toHaveTextContent('Dashboard')
    })

    test("Deve haver uma lista com 10 pokemons", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)

        const items = await screen.findAllByRole("listitem")

        expect(items).toHaveLength(2)
    })

    test("Deve haver um pikachu na lista", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)

        const pikachu = await screen.findByText("Pikachu")

        expect(pikachu).toBeInTheDocument()
    })

    test("Deve ser possível clickar no li para abrir detalhes no pokemon", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)

        const link = await screen.findByText("Pikachu")

        fireEvent.click(link)
        expect(navigateMock).toHaveBeenCalledTimes(1)
    })
})