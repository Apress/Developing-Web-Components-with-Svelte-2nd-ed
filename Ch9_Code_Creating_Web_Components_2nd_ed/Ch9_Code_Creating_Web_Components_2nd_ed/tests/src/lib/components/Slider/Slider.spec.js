import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Slider from "../../Slider/Slider.svelte";

describe("Tests for Slider", () => {
  const props = {
    id: "Slider",
  };

  it("should render properly", () => {
    const result = render(Slider, { props });
    expect(() => result).not.toThrow();
  });

  it("should show a new value when slider handle moved", async () => {
    render(Slider, props);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "23" } });
    expect(slider.value).toBe("23");
  });

  it("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Slider({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
