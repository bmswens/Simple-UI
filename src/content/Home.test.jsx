import { render, screen } from "@testing-library/react"
import Home from "./Home"


describe('<Home>', function() {
    it("should display the title of the page", function() {
        render(<Home />)
        let text = screen.queryByText(/Home/)
        expect(text).not.toBeNull()
    })
})