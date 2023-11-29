import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';

import "@testing-library/jest-dom";

import Button from "./Button";

test("verifica se o texto foi modificado", () => {
    render(<Button />);
    const button = screen.getByRole("button", { name: /clique aqui/i });
    const text = screen.getByTestId("text");

    expect(text).toHaveTextContent("Texto inicial");

    fireEvent.click(button);

    expect(text).toHaveTextContent("Texto alterado após click...");
});