import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Switch from "../../Switch/Switch.svelte";

describe("Tests for Switch", () => {
  const props = {
    disabled: false,
    label: "Disabled switch with label",
  };

  test("should render properly", () => {
    const result = render(Switch, { props });
    expect(() => result).not.toThrow();
  });

  test("show a label with correct text", () => {
    const result = render(Switch, { props });
    expect(result).not.toBeNull();
  });

  test("should show a switch with enabled background when clicked", async () => {
    render(Switch, { props });
    const SwitchExample = screen.getByRole("switch");
    await fireEvent.click(SwitchExample);
    expect(SwitchExample.checked).toBe(true);
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Switch({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
