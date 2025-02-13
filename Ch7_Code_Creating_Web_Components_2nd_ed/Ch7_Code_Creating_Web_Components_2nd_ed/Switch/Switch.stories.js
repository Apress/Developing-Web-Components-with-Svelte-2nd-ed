import Switch from "./Switch.svelte";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import SwitchDecorator from "./SwitchDecorator.svelte";

export default {
  title: "Garnet UI Library/Animation Components/Switch",
  component: Switch,
  decorators: [() => SwitchDecorator],
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "string" },
    oninput: { action: "changed" },
  },
  on: { change: fn().mockName("on-change") },
};

export const Default = (args) => ({
  Component: Switch,
  props: {
    ...args,
    id: "1",
    label: "Switch with label",
    disabled: false,
    on: { change: fn().mockName("on-change") },
  },
});

export const Disabled = (args) => ({
  Component: Switch,
  props: {
    ...args,
    id: "1",
    label: "Disabled switch with label",
    disabled: true,
    on: { change: fn().mockName("on-change") },
  },
});
