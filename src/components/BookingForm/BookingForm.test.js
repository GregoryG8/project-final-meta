import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { submitAPI } from '../api/api';

jest.mock('../api/api', () => ({
  submitAPI: jest.fn(),
}));

test("Renders the BookingForm labels", () => {
  render(
    <BookingForm availableTimes={[]} selectedDate="" onDateChange={() => {}} />
  );

  // Verifica que la etiqueta "Choose date" está en el documento
  const dateLabel = screen.getByLabelText("Choose date");
  expect(dateLabel).toBeInTheDocument();

  // Verifica que la etiqueta "Choose time" está en el documento
  const timeLabel = screen.getByLabelText("Choose time");
  expect(timeLabel).toBeInTheDocument();

  // Verifica que la etiqueta "Occasion" está en el documento
  const occasionLabel = screen.getByLabelText("Occasion");
  expect(occasionLabel).toBeInTheDocument();

  // Verifica que la etiqueta "Number of persons" está en el documento
  const numberPersonsLabel = screen.getByLabelText("Number of persons:");
  expect(numberPersonsLabel).toBeInTheDocument();

  // Verifica que la etiqueta "Name" está en el documento
  const nameLabel = screen.getByLabelText("Name");
  expect(nameLabel).toBeInTheDocument();

  // Verifica que la etiqueta "Phone" está en el documento
  const phoneLabel = screen.getByLabelText("Phone");
  expect(phoneLabel).toBeInTheDocument();

  // Verifica que la etiqueta "Instructions" está en el documento
  const instructionsLabel = screen.getByLabelText("Instructions");
  expect(instructionsLabel).toBeInTheDocument();
});

describe("BookingForm", () => {
  test("submits the form with correct data and logs to console", () => {
    // Mock submitAPI to always return true
    submitAPI.mockImplementation(() => true);

    // Spy on alert
    window.alert = jest.fn();

    // Render the BookingForm component
    render(
      <BookingForm
        availableTimes={["10:00 AM", "11:00 AM"]}
        selectedDate=""
        onDateChange={() => {}}
      />
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2024-08-04" },
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "10:00 AM" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Birthday" },
    });
    fireEvent.change(screen.getByLabelText(/Number of persons/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/Instructions/i), {
      target: { value: "No special instructions" },
    });

    // Simulate form submission
    fireEvent.click(screen.getByText(/Make Your reservation/i));

    // Check if submitAPI was called with the correct data
    expect(submitAPI).toHaveBeenCalledWith({
      date: "2024-08-04",
      time: "10:00 AM",
      occasion: "Birthday",
      numberPersons: "4",
      name: "John Doe",
      phone: "1234567890",
      instructions: "No special instructions",
    });

    // Check if alert was called with success message
    expect(window.alert).toHaveBeenCalledWith("Reservation submitted successfully!");
  });
});

test("validateForm function identifies missing date as invalid", () => {
  render(
    <BookingForm availableTimes={[]} selectedDate="" onDateChange={() => {}} />
  );
  const submitButton = screen.getByText(/make your reservation/i);
  fireEvent.click(submitButton);
  const errorText = screen.getByText(/date is required/i);
  expect(errorText).toBeInTheDocument();
});

test('valida que el campo time es obligatorio', () => {
  render(<BookingForm availableTimes={["18:00", "19:00"]} selectedDate="2024-01-01" onDateChange={() => {}} />);
  const submitButton = screen.getByText(/make your reservation/i);
  fireEvent.click(submitButton);
  expect(screen.getByText(/time is required/i)).toBeInTheDocument();
});

test('valida que el campo numberPersons requiere un número mínimo de 1', () => {
  render(<BookingForm availableTimes={[]} selectedDate="2024-01-01" onDateChange={() => {}} />);
  const numberInput = screen.getByLabelText(/number of persons/i);
  fireEvent.change(numberInput, { target: { value: '0' } });
  fireEvent.click(screen.getByText(/make your reservation/i));
  expect(screen.getByText(/number of persons must be at least 1/i)).toBeInTheDocument();
});

test('valida que el campo name es obligatorio', () => {
  render(<BookingForm availableTimes={[]} selectedDate="2024-01-01" onDateChange={() => {}} />);
  const submitButton = screen.getByText(/make your reservation/i);
  fireEvent.click(submitButton);
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
});

test('validateForm function identifies valid phone number', () => {
  render(<BookingForm availableTimes={[]} selectedDate="2024-01-01" onDateChange={() => {}} />);
  const phoneInput = screen.getByLabelText(/phone/i);
  fireEvent.change(phoneInput, { target: { value: '1234567890' } });
  fireEvent.click(screen.getByText(/make your reservation/i));
  const errorText = screen.queryByText(/phone number must be 10 digits/i);
  expect(errorText).not.toBeInTheDocument();
});