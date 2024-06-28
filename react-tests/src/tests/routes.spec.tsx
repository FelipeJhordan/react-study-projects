import { render } from "@testing-library/react"

import { screen } from "@testing-library/react"

import { MemoryRouter } from "react-router-dom"
import MainRoutes from "../routes"

describe("Testa o component MainRoutes", () => {
    test("Deve renderizar a página de login", async () => {
        render(<MemoryRouter initialEntries={["/"]}>
            <MainRoutes />
        </MemoryRouter>)

    const title = screen.getByText("Sign in")

    expect(title).toBeInTheDocument()
    })
    test("Deve renderizar a página de cadastro", async () => {
        render(<MemoryRouter initialEntries={["/sign-up"]}>
            <MainRoutes />
        </MemoryRouter>)

    const title = await screen.findByRole("heading", {
        name: "Cadastre-se"
    })

    expect(title).toBeInTheDocument()
    })

    test("Deve renderizar a página de dashboard", async () => {
        render(<MemoryRouter initialEntries={["/dashboard"]}>
            <MainRoutes />
        </MemoryRouter>)

    const title = await screen.getByText("Dashboard")

    expect(title).toBeInTheDocument()
    })

    test("Deve renderizar a página de dashboard", async () => {
        render(<MemoryRouter initialEntries={["/not-mapped-route"]}>
            <MainRoutes />
        </MemoryRouter>)

    const title = await screen.getByText("404 Page Not Found")

    expect(title).toBeInTheDocument()
    })

})