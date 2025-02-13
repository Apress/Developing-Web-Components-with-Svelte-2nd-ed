import Switch from "./Switch.svelte";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import SwitchDecorator from "./SwitchDecorator.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

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

Default.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};

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

Disabled.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};
