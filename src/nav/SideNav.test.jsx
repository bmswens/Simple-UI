import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router"
import SideNav from "./SideNav"
import userEvent from "@testing-library/user-event"


describe('<SideNav>', function() {
    it("should close on routing", async function() {
        const close = vitest.fn()
        const user = userEvent.setup()
        render(
            <BrowserRouter>
                <SideNav
                    open={true}
                    close={close}
                />
            </BrowserRouter>
        )
        let text = screen.queryByText(/Home/)
        expect(text).not.toBeNull()
        await user.click(text)
        expect(close).toHaveBeenCalled()
    })
})