import Alarm from "./Alarm.svelte";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

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
  props: {
    id: "1",
    label: "Alarm with label",
    disabled: false,
    filled: false,
  },
  on: { change: fn().mockName("on-change") },
};

export const Default = (args) => ({
  Component: Alarm,
  props: {
    ...args,
    notifications: 23,
    on: { change: fn().mockName("on-change") },
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const Filled = (args) => ({
  Component: Alarm,
  props: {
    ...args,
    notifications: 12,
    on: { change: fn().mockName("on-change") },
  },
});

Filled.parameters = {
  badges: [BADGES.ALPHA],
};

export const Small = (args) => ({
  Component: Alarm,
  props: {
    ...args,
    filled: true,
    small: true,
    on: { change: fn().mockName("on-change") },
  },
});

Small.parameters = {
  badges: [BADGES.ALPHA],
};

export const AnimateNotifications = (args) => ({
  Component: Alarm,
  props: {
    ...args,
    animate: true,
    on: { change: fn().mockName("on-change") },
  },
});

AnimateNotifications.parameters = {
  badges: [BADGES.ALPHA],
};
