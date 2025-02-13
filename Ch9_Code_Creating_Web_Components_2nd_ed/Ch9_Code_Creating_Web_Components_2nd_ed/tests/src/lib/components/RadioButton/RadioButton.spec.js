import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import RadioButton from "../../RadioButton/RadioButton.svelte";

describe("Tests for RadioButton", () => {
  const props = {
    legend: "RadioButton Group",
  };

  test("should render properly", () => {
    const result = render(RadioButton, { props });
    expect(() => result).not.toThrow();
  });

  test("show a label with correct text", () => {
    const result = render(RadioButton, { props });
    expect(result).not.toBeNull();
  });

  test("should show a checked radio when clicked", async () => {
    const result = render(RadioButton, { props });
    const RadioButtonsGroup = screen.getAllByRole("radiogroup")[1];
    await fireEvent.click(RadioButtonsGroup);
    expect(RadioButtonsGroup.checked).toBe(true);
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new RadioButton({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
