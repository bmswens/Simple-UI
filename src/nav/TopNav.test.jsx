import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import TopNav from "./TopNav"


describe('<TopNav>', function() {
    it("should display the title", function() {
        render(
            <TopNav />
        )
        let text = screen.queryByText(/Simple UI/)
        expect(text).not.toBeNull()
    })
    it("should open the drawer", async function() {
        const user = userEvent.setup()
        const openDrawer = vitest.fn()
        render(
            <TopNav
                openDrawer={openDrawer}
            />
        )
        let button = screen.getByRole("button", { name: "Menu" })
        await user.click(button)
        expect(openDrawer).toHaveBeenCalled()
    })
})