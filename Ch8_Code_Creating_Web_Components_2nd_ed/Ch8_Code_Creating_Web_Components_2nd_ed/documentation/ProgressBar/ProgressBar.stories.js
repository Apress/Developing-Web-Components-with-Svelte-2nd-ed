import ProgressBar from "./ProgressBar.svelte";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Animation Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "string" },
    oninput: { action: "changed" },
  },
  on: { change: fn().mockName("on-change") },
  props: {
    disabled: false,
  },
};

export const Default = (args) => ({
  Component: ProgressBar,
  props: {
    ...args,
    color: "red",
    labelTextOutside: "ProgressBar",
    on: { change: fn().mockName("on-change") },
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const LabelOutside = (args) => ({
  Component: ProgressBar,
  props: {
    ...args,
    color: "blue",
    labelInside: false,
    labelTextOutside: "This is a test progress bar",
    on: { change: fn().mockName("on-change") },
  },
});

LabelOutside.parameters = {
  badges: [BADGES.ALPHA],
};
