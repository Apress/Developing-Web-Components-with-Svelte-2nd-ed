import Input from "./Input.svelte";
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Basic Components/Input",
  component: Input,
  argTypes: {
    disabled: { control: "boolean" },
    oninput: { action: "changed" },
    placeholder: "",
  },
  on: { input: fn().mockName("on-input") },
  props: {
    label: "Text:",
    placeholder: "Enter your text here",
    disabled: false,
  },
};

export const Default = (args) => ({
  Component: Input,
  props: {
    ...args,
    on: { input: fn().mockName("on-input") },
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const NoLabel = (args) => ({
  Component: Input,
  props: {
    ...args,
    label: "",
    on: { input: fn().mockName("on-input") },
  },
});

NoLabel.parameters = {
  badges: [BADGES.ALPHA],
};

export const Disabled = (args) => ({
  Component: Input,
  props: {
    ...args,
    label: "Text:",
    disabled: true,
    placeholder: "disabled field",
  },
});

Disabled.parameters = {
  badges: [BADGES.ALPHA],
};
