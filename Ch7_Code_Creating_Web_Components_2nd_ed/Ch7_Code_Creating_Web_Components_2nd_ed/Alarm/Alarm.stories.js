import Alarm from "./Alarm.svelte";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";

export default {
  title: "Garnet UI Library/Animation Components/Alarm",
  component: Alarm,
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "string" },
    small: { control: "boolean" },
    oninput: { action: "changed" },
    notifications: { control: "integer" },
  },
  on: { change: fn().mockName("on-change") },
};

export const Default = (args) => ({
  Component: Alarm,
  props: {
    ...args,
    id: "1",
    label: "Alarm with label",
    notifications: 23,
    disabled: false,
    filled: false,
    on: { change: fn().mockName("on-change") },
  },
});

export const Filled = (args) => ({
  Component: Alarm,
  props: {
    ...args,
    id: "1",
    label: "Alarm with label",
    notifications: 12,
    disabled: false,
    filled: true,
    on: { change: fn().mockName("on-change") },
  },
});

export const Small = (args) => ({
  Component: Alarm,
  props: {
    ...args,
    id: "1",
    label: "Alarm with label",
    notifications: 12,
    disabled: false,
    filled: true,
    small: true,
    on: { change: fn().mockName("on-change") },
  },
});
