import { BrowserRouter } from "react-router"
import NavItem from "./NavItem"
import { screen } from "@testing-library/react"
import { render } from "@testing-library/react"


describe('<NavItem>', function() {
    it("holds text and routes", function() {
        render(
            <BrowserRouter>
                <NavItem
                    text="My Text"
                    subtext="My Other Text"
                />
            </BrowserRouter>
        )
        let mainText = screen.queryByText(/My Text/)
        let secondText = screen.queryByText(/My Other Text/)
        expect(mainText).not.toBeNull()
        expect(secondText).not.toBeNull()
    })
})