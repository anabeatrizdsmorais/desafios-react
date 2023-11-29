import React from "react";
import {fireEvent, getByAltText, getByTestId, render, screen} from '@testing-library/react';

import "@testing-library/jest-dom";

import Form from "./Form";

test("verifica se o submit ocorreu", () => {
    
    const handleSubmit = jest.fn();
    
    render(<Form onSubmit={handleSubmit}/>);

    const input = getByTestId("input-text");

    fireEvent.change(input, { target: { value: "algum texto" } });

    const form = screen.getByTestId("form");
    fireEvent.submit(input);
    
    const success = screen.getByTestId("success");
    expect(success).toBeIntheDocument;

});