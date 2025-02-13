import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Alarm from "../../Alarm/Alarm.svelte";

describe("Tests for Alarm", () => {
  const props = {
    id: "1",
    label: "Alarm with label",
    notifications: 23,
    filled: false,
  };

  test("should render properly", () => {
    const result = render(Alarm, props);
    expect(() => result).not.toThrow();
  });

  test("should show correct number of notifications", () => {
    const result = render(Alarm, props);

    const notifications = result.getByTestId("notifications").textContent;
    expect(notifications).toEqual("23");
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Alarm({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
