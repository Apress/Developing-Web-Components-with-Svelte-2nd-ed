import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import { userEvent } from "@vitest/browser/context";
import Tabs from "../../Tabs/Tabs.svelte";

describe("Tests for Tabs", () => {
  const props = {
    vertical: false,
    items: [
      { id: 1, name: "Tab 1", text: "This is a test" },
      { id: 2, name: "Tab 2", text: "Here is tab 2" },
      { id: 3, name: "Tab 3", text: "And this is tab 3" },
    ],
  };

  test("should render properly", () => {
    const result = render(Tabs, props);
    expect(() => result).not.toThrow();
  });

  test("should change text if clicking on tab 2", async () => {
    render(Tabs, props);
    const secondTabElement = screen.queryByText("Tab 2");
    await fireEvent.click(secondTabElement);

    const secondTabElementText = await screen.findByText(/Here is tab 2/i);
    expect(secondTabElementText).toBeTruthy();
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Tabs({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
