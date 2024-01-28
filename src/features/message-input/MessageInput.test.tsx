import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MessageInput from "./index";

test("calls sendMessage with input value", () => {
    const sendMessage = jest.fn();
    const { getByRole } = render(<MessageInput sendMessage={sendMessage} />);
    const input = getByRole("textbox");
    const button = getByRole("button");
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(button);
    expect(sendMessage).toHaveBeenCalledWith("Hello");
});