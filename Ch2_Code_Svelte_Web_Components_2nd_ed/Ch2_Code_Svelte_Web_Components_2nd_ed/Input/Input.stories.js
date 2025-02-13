import Input from "./Input.svelte";
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";

export default {
  title: "Garnet UI Library/Basic Components/Input",
  component: Input,
  argTypes: {
    disabled: { control: "boolean" },
    oninput: { action: "changed" },
    placeholder: "",
  },
  on: { input: fn().mockName("on-input") },
};

export const Default = (args) => ({
  Component: Input,
  props: {
    ...args,
    label: "Text:",
    placeholder: "Enter your text here",
    props: args,
    on: { input: fn().mockName("on-input") },
  },
});

export const NoLabel = (args) => ({
  Component: Input,
  props: {
    ...args,
    label: "",
    placeholder: "Enter your text here",
    props: args,
    on: { input: fn().mockName("on-input") },
  },
});

export const Disabled = (args) => ({
  Component: Input,
  props: {
    ...args,
    placeholder: "disabled field",
    label: "Text",
    disabled: true,
  },
});
