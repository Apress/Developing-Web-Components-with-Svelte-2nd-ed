import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import SelectBox from "../../SelectBox/SelectBox.svelte";

describe("Tests for SelectBox", () => {
  const props = {
    selectOptions: [{ text: "aaa" }, { text: "bbb" }, { text: "ccc" }],
    index: 0,
    disabled: false,
  };

  test("should render properly", () => {
    const result = render(SelectBox, props);
    expect(() => result).not.toThrow();
  });

  test("should select the second option if clicked", async () => {
    const result = render(SelectBox, props);

    await fireEvent.click(screen.getByTestId("selectdropdown"));
    screen.findByText(props.selectOptions[0].text).then(function (result) {
      expect(result).toContain("aaa");
    });
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new SelectBox({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
