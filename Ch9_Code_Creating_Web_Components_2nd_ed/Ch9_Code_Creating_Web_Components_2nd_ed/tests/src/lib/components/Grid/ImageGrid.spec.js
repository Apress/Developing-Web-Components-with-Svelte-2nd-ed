import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Table from "../../Grid/Table.svelte";

describe("Tests for ImageGrid", () => {
  const props = {
    columnCount: "1",
    rowCount: "4",
    border: "none",
    displayImages: false,
    itemCount: "12",
    displayImageLabels: false,
  };

  test("should render properly without images", async () => {
    const result = render(Table, { props });
    expect(() => result).not.toThrow();
  });

  test("should render properly if images added", async () => {
    const result = render(Table, { ...props, displayImages: true });
    expect(() => result).not.toThrow();
  });

  test("should render properly if images added with text labels", async () => {
    const result = render(Table, {
      ...props,
      displayImages: true,
      displayImageLabels: true,
    });

    const imageCount = result.getAllByTestId("placeholderImage");
    const labelCount = result.getAllByTestId("placeholderLabel");

    expect(imageCount.length).toBe(12);
    expect(labelCount.length).toBe(12);
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Table({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
