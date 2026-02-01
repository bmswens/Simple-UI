import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router"
import Content from "./Content"


describe('<Content>', function() {
    it("should render without fail", function() {
        render(
            <BrowserRouter>
                <Content />
            </BrowserRouter>
        )
    })
})