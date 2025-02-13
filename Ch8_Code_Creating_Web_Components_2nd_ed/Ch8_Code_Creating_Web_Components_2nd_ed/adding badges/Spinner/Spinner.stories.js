import Spinner from "./Spinner.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Action Components/Spinner",
  component: Spinner,
  argTypes: {
    color: "#733635",
    duration: "0.75s",
    size: "40",
    variant: "circle",
  },
  parameters: {
    docs: {
      story: {
        height: "100px",
      },
    },
  },
};

export const Circle = {
  args: {
    color: "#733635",
    duration: "0.75s",
    size: "40",
    variant: "circle",
  },
};

Circle.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};

export const Jumper = {
  args: {
    color: "#733635",
    duration: "1s",
    size: "60",
    variant: "jumper",
  },
};

Jumper.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};

export const Jellyfish = {
  args: {
    color: "#733635",
    duration: "2.5s",
    size: "60",
    variant: "jellyfish",
  },
};

Jellyfish.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};
