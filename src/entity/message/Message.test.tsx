import React from "react";
import { render } from "@testing-library/react";
import Message from "./index";

describe("message component", () => {
    it("renders incoming message correctly", () => {
        const { getByText } = render(<Message text='Hello!' type='get' />);
        expect(getByText("Hello!")).toBeInTheDocument();
    });

    it("renders outgoing message correctly", () => {

        const { getByText } = render(<Message text='Hi!' type='sent'/>);
        expect(getByText("Hi!")).toBeInTheDocument();
    });
});