import { render } from "@testing-library/svelte";
import Spinner from "../../Spinner/Spinner.svelte";

describe("Tests for Spinner", () => {
  const props = {
    color: "#733635",
    duration: "0.75s",
    size: "40",
    variant: "circle",
  };

  it("should render properly", async () => {
    const result = render(Spinner, { props });
    expect(() => result).not.toThrow();
  });

  it("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Spinner({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
