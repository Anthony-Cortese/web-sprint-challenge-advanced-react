import React from "react";
import { render, screen, userEvent, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />)
    const header = screen.getByText(/react plants/i)
    expect(header).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    
    const firstName = screen.getByLabelText(/first name:/i);
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);


    fireEvent.change(firstName,{target: {value:"Tia", name: "firstName"}})
    fireEvent.change(lastName,{target: {value:"Marie", name: "lastName"}})
    fireEvent.change(address,{target: {value:"123 fake st", name: "address"}})
    fireEvent.change(city,{target: {value:"Provo", name: "city"}})
    fireEvent.change(state,{target: {value:"Utah", name: "state"}})
    fireEvent.change(zip,{target: {value:"84606", name: "zip"}})

    expect(firstName).toHaveValue('Tia')
    expect(lastName).toHaveValue('Marie')
    expect(address).toHaveValue('123 fake st')
    expect(city).toHaveValue('Provo')
    expect(state).toHaveValue('Utah')
    expect(zip).toHaveValue('84606')


});
