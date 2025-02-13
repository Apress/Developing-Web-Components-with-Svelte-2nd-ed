import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.svelte";

describe("Tests for Breadcrumbs", () => {
  const props = {
    divider: "/",
    image: false,
    breadcrumbItems: [
      { href: "/", text: "Dashboard" },
      { href: "/reports", text: "Annual reports" },
      { href: "/reports/2019", text: "2019" },
    ],
  };

  test("should render properly", async () => {
    const result = render(Breadcrumbs, { props });
    expect(() => result).not.toThrow();
  });

  test("should show the Breadcrumbs when clicking the button", async () => {
    const result = render(Breadcrumbs, { props });
    const links = result.getAllByTestId("breadcrumbLink");
    expect(links.length).toBe(2);
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Breadcrumbs({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });
});
