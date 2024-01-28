import React from "react";
import { render } from "@testing-library/react";
import MessageList from "./index";
import { MessageType } from "../../shared/type/message.interface";

test("renders list of messages", () => {
    const messages: MessageType[] = [
        {text: "Hello", type: "sent"},
        {text: "World", type: "get"}
    ];
    const { getByText } = render(<MessageList messages={messages} />);
    expect(getByText("Hello")).toBeInTheDocument();
    expect(getByText("World")).toBeInTheDocument();
});