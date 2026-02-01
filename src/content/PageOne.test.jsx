import { render, screen } from "@testing-library/react"
import PageOne from "./PageOne"


describe('<PageOne>', function() {
    it("should display the title of the page", function() {
        render(<PageOne />)
        let text = screen.queryByText(/Page One/)
        expect(text).not.toBeNull()
    })
})