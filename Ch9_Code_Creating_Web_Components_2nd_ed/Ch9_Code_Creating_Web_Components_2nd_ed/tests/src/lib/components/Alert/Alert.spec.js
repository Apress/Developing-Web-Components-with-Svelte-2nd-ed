import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Alert from "../../Alert/Alert.svelte";

describe("Tests for Alert", () => {
  const props = {
    show: true,
    description: "An info description",
    title: "Simple Info",
    icon: "true",
    type: "info",
    close: "false",
  };

  test("should render properly", async () => {
    const result = await render(Alert, { props });
    expect(() => result).not.toThrow();
  });

  // https://testing-library.com/docs/svelte-testing-library/example
  test("should disappear when close button clicked", async () => {
    const result = await render(Alert, { props });
    const alertDialog = fireEvent.click(screen.getByRole("alert"));
    expect(alertDialog).toBeNull;
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Alert({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
