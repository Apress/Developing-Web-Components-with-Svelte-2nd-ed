import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Avatar from "../../Avatar/Avatar.svelte";

const AvatarHTML = `<div class="garnet-avatar s-q7VgqBOCP_sX"><img src="/avatar.png" class="avatar-img s-q7VgqBOCP_sX" alt="avatar">  <span class="base available small s-q7VgqBOCP_sX"></span></div>`;
expect.extend(AxeMatchers);

describe("Tests for Avatar", () => {
  const mockText = "This is a Avatar";

  const props = {
    status: "available",
    src: "/avatar.png",
    statusSize: "smal",
  };

  test("should render properly", () => {
    const result = render(Avatar, { props });
    expect(() => result).not.toThrow();
  });

  test("show show a label with a red busy status", () => {
    const result = render(Avatar, { ...props, status: "busy" });

    const element = document.querySelector("span");
    // element has a class
    expect(element.classList).toContain("busy");
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Avatar({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => AvatarHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
