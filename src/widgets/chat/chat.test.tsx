import React from "react";
import { render } from "@testing-library/react";
import Chat from "./index";

describe("chat component", () => {
    it("renders messages correctly", () => {
        const { getByText } = render(<Chat />);
        expect(getByText("Hello")).toBeInTheDocument();
    });
});
