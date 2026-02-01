import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router"
import Navigation from "./Navigation"
import userEvent from "@testing-library/user-event"


describe('<Navigation>', function() {
    it("should allow the user to navigate to another page", async function() {
        const user = userEvent.setup()
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        )
        let button = screen.getByRole("button", { name: "Menu" })
        await user.click(button)
        let contentButton = screen.getByText(/Content/)
        await user.click(contentButton)
        expect(window.location.pathname).toEqual("/content")
    })
})