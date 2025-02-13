import Slider from "./Slider.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Basic Components/Slider",
  component: Slider,
  label: "Example Slider",
  argTypes: {
    val: 1,
    min: 0,
    max: 100,
    step: 10,
    ticks: false,
  },
};

export const Default = {
  args: {
    label: "Text:",
  },
};

Default.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};

export const Step = {
  args: {
    step: 25,
    ticks: true,
  },
};

Step.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

Disabled.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};
