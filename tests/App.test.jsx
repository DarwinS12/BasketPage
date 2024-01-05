import React from "react";
import { describe, test, expect } from "vitest";
import { screen, render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchPlayerPage } from "../src/pages/SearchPlayerPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { TeamsPage } from "../src/pages/TeamsPage";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("<App/>", () => {
  test("should show teams", async () => {
    render(
      <BrowserRouter>
        <TeamsPage />
      </BrowserRouter>,
      { wrapper: wrapper }
    );

    await waitFor(() => {
      const teams = screen.getAllByRole("article");
      expect(teams.length).toBeGreaterThanOrEqual(1);

      teams.forEach((teamContainer) => {
        const buttons = within(teamContainer).getAllByRole("button");
        expect(buttons.length).toBe(2);
      });
    });
  });

  test("should search a player", async () => {
    const user = userEvent.setup();
    render(<SearchPlayerPage />, { wrapper: wrapper });

    await waitFor(
      () => {
        const input = screen.getByRole("textbox");
        expect(input).toBeDefined();
      },
      { timeout: 4000 }
    );

    user.type(screen.getByRole("textbox"), "james");

    await waitFor(() => {
      const articleElements = screen.getAllByRole("article");
      expect(articleElements.length).toBeGreaterThanOrEqual(1);
    });
  });
});
