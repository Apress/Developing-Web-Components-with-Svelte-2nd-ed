import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Accordion from "../../Accordion/Accordion.svelte";

describe("Tests for Accordion", () => {
  const mockText = "This is a Accordion";

  const props = {
    data: [
      { title: "Heading 1", text: "aaa" },
      { title: "Heading 2", text: "bbb" },
      { title: "Heading 3", text: "ccc" },
    ],
  };

  test("should render properly", () => {
    const result = render(Accordion, { props });
    expect(() => result).not.toThrow();
  });

  test("should have the correct title", () => {
    render(Accordion, props);

    expect(screen.queryByText(props.data[0].title)).toBeInTheDocument();
    expect(screen.queryByText(props.data[1].title)).toBeInTheDocument();
    expect(screen.queryByText(props.data[2].title)).toBeInTheDocument();
  });

  test("should have the correct text for the first AccordionItem", async () => {
    render(Accordion, props);

    const AccordionObj = await screen.getAllByRole("button")[0];
    await fireEvent.click(AccordionObj);

    const accordionText = await screen.findByText(/aaa/i);
    expect(accordionText).toBeTruthy();
  });

  test("should show aria-expanded as true when first item clicked", async () => {
    render(Accordion, props);
    const AccordionObj = await screen.getAllByRole("button")[0];
    await fireEvent.click(AccordionObj);
    expect(screen.getAllByRole("button", { expanded: true })[0]).not.toBeNull();
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Accordion({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
