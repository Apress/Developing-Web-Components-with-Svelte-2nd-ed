import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import ProgressBar from "../../ProgressBar/ProgressBar.svelte";

describe("Tests for ProgressBar", () => {
  const props = {
    progress: "52",
    precision: 0,
    tweenDuration: 400,
    animate: true,
    labelInside: true,
    labelTextOutside: "This is a test",
    easing: "cubicOut",
    color: "#733635",
  };

  test("should render properly", () => {
    const result = render(ProgressBar, { props });
    expect(() => result).not.toThrow();
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new ProgressBar({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
