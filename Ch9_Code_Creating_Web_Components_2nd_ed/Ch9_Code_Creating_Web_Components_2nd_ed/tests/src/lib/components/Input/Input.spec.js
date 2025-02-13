import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Input from "../../Input/Input.svelte";

describe("Tests for Input", () => {
  const props = {
    id: "Input",
    class: "garnet",
    disabled: false,
    placeholder: "example text",
  };

  test("should render properly", () => {
    const result = render(Input, props);
    expect(() => result).not.toThrow();
  });

  test("should show a textbox with correct placeholder text", () => {
    render(Input, props);
    const inputPlaceholder = screen.getByRole("textbox").placeholder;
    expect(inputPlaceholder).toEqual("example text");
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Input({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
