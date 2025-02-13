import Checkbox from "./Checkbox.svelte";
import CheckboxDecorator from "./CheckboxDecorator.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

let statusMessage = "";

export default {
  title: "Garnet UI Library/Basic Components/Checkbox",
  component: Checkbox,
  decorators: [() => CheckboxDecorator],
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" },
    oninput: { action: "changed" },
  },
};

export const Default = () => ({
  Component: Checkbox,
  props: {
    checked: true,
    label: "This is a test",
  },
  on: {
    change: (event) => {
      event.detail.checked == true
        ? (statusMessage = "checked")
        : (statusMessage = "unchecked");
      document.getElementById("message").innerHTML =
        `Status: Checkbox is ${statusMessage}`;
    },
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const Disabled = () => ({
  Component: Checkbox,
  props: {
    checked: true,
    disabled: true,
    label: "This is a disabled checkbox",
  },
});

Disabled.parameters = {
  badges: [BADGES.ALPHA],
};
