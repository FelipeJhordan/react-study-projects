import { render, screen } from "@testing-library/react"
import PokemonDetail from "."
import { fetchPokemonDetail } from "../../services/PokemonService"
import { faker } from "@faker-js/faker"

import * as rrd from 'react-router-dom'

const mockFn = vi.fn(fetchPokemonDetail)
const mockFetchPokemonDetail = mockFn.mockImplementation(
    async () => {
        return {
            id: 1,
            name: 'Pikachu',
            type: 'Eletrico',
            image: faker.image.urlPlaceholder()
        }
    }
)

describe("Testa o component de PokemonDetail", () => { 
    vi.mock("react-router-dom", () => {
        return {
            useParams() {
                return { id: 1 }
            },
            Link: vi.fn().mockImplementation((props) => props.children)
        }
     })

    test("Deve haver um título na página", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetail}/>)

        const pikachu = await screen.findByText("Pikachu")

        expect(pikachu).toBeInTheDocument()
    })
    test("Deve haver um link para voltar", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetail}/>)

        const linkBack = await screen.findByText("Voltar")

        expect(linkBack).toBeInTheDocument()
    })
    test("Deve validar quando não vier parâmetro na rota", async () => {
        vi.spyOn(rrd, "useParams").mockImplementation(() => ({
            id: "0"
        }))
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetail}/>)

        const errorText = await screen.findByText("O id não é válido!")
        expect(errorText).toBeInTheDocument()
    })
 })