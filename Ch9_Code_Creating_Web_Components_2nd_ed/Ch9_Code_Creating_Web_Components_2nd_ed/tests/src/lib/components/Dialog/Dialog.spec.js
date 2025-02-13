import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Dialog from "../../Dialog/Dialog.svelte";

describe("Tests for Dialog", () => {
  const props = {
    show: "false",
  };

  it("should render properly", async () => {
    const result = render(Dialog, { props });
    expect(() => result).not.toThrow();
  });

  it("should show the dialog when clicking the button", async () => {
    render(Dialog, { props });

    const button = screen.getByText("Show dialog");
    fireEvent.click(button);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("should close the dialog when clicking the close button", async () => {
    render(Dialog, { props });

    // opens dialog
    const button = screen.getByText("Show dialog");
    fireEvent.click(button);

    // closes dialog
    const modal = screen.getByTestId("modal");
    const close = screen.getByTestId("close-button");
    await fireEvent.click(close);
    expect(modal).not.toBeInTheDocument();
  });

  it("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Dialog({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
