import RadioButton from "./RadioButton.svelte";
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";

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
  argTypes: {
    options: selectOptions,
    disabled: { control: "boolean" },
    onchange: { action: "changed" },
  },
  on: { change: fn().mockName("on-change") },
};

export const Default = (args) => ({
  Component: RadioButton,
  props: {
    ...args,
    selectOptions,
  },
  on: { change: action("on-change") },
});

export const Disabled = (args) => ({
  Component: RadioButton,
  props: {
    ...args,
    selectOptions,
    disabled: true,
  },
  on: { change: action("on-change") },
});
