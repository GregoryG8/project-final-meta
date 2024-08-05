import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

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
    // Spy on console.log
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

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

    // Check if console.log was called
    expect(consoleSpy).toHaveBeenCalledWith("Form submitted:", {
      date: "2024-08-04",
      time: "10:00 AM",
      occasion: "Birthday",
      numberPersons: "4",
      name: "John Doe",
      phone: "1234567890",
      Instructions: "No special instructions",
    });

    // Cleanup spy
    consoleSpy.mockRestore();
  });
});
