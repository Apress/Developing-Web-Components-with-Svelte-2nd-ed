import RadioButton from "./RadioButton.svelte";
import RadioButtonDecorator from "./RadioButtonDecorator.svelte";
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

let selectOptions = [
  {
    value: "Armstrong-Siddeley",
    label: "Armstrong-Siddeley",
  },
  {
    value: "Jaguar Mark II",
    label: "Jaguar Mark II",
  },
  {
    value: "Ford Zephyr",
    label: "Ford Zephyr",
  },
];

export default {
  title: "Garnet UI Library/Basic Components/RadioButton",
  component: RadioButton,
  decorators: [() => RadioButtonDecorator],
  argTypes: {
    options: selectOptions,
    disabled: { control: "boolean" },
    onchange: { action: "changed" },
  },
  props: {
    disabled: false,
  },
  on: { change: fn().mockName("on-change") },
};

export const Default = (args) => ({
  Component: RadioButton,
  props: {
    ...args,
    selectOptions,
  },
  on: {
    change: (event) => {
      const selectedItem = event.target.value;

      document.getElementById("message").innerHTML =
        `Selected option: ${selectedItem}`;
    },
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const Disabled = (args) => ({
  Component: RadioButton,
  props: {
    ...args,
    selectOptions,
    disabled: true,
  },
  on: { change: action("on-change") },
});

Disabled.parameters = {
  badges: [BADGES.ALPHA],
};
