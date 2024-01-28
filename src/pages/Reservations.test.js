import { fireEvent, render, screen } from "@testing-library/react";
import Reservations from "./pages";

describe("Reservations", () => {
    test("Rerservation Form", () => {
        const handleSubmit = jest.fn();
        render(<Reservations handleSubmit={handleSubmit} />);

        const nameInput = screen.getByLabelText(/name/i);
        const dateInput = screen.getByLabelText(/date/i);
        const timeInput = screen.getByLabelText(/time/i);

        const submitButton = screen.getByText(/make your reservation/i);
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
        expect(nameInput).toHaveValue("");
        expect(dateInput).toHaveValue("");
        expect(timeInput).toHaveValue("");
    });
});
