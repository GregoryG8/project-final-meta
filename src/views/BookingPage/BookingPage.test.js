import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BookingPage from "./BookingPage";
import { fetchAPI } from "../../components/api/api";
import { MemoryRouter } from "react-router-dom";

// Mock de fetchAPI
jest.mock("../../components/api/api", () => ({
  fetchAPI: jest.fn(),
}));

test("initializeTimes updates available times correctly", async () => {
  // Datos mockeados para fetchAPI
  const mockTimes = ["17:00", "18:00", "19:00"];
  fetchAPI.mockReturnValue(mockTimes);

  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  // Espera a que al menos uno de los tiempos disponibles esté en el DOM
  await waitFor(() => {
    expect(screen.getByText("17:00")).toBeInTheDocument();
  });

  // Verifica la presencia de otros tiempos disponibles
  expect(screen.getByText("18:00")).toBeInTheDocument();
  expect(screen.getByText("19:00")).toBeInTheDocument();
});
