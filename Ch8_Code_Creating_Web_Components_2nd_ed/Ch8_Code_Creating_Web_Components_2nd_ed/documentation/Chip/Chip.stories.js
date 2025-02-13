import Chip from "./Chip.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Navigation Components/Chip",
  component: Chip,
  argTypes: {
    oninput: { action: "changed" },
  },
  props: {
    close: false,
    outline: false,
    chipContent: "Test chip",
  },
};

export let Default = (args) => ({
  Component: Chip,
  props: {
    ...args,
    close: false,
    chipContent: "Test chip",
  },
  on: {
    change: (event) => {
      window.alert(event.target);
    },
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export let CloseButton = (args) => ({
  Component: Chip,
  props: {
    ...args,
    close: true,
    chipContent: "Test chip",
  },
  on: {
    change: (event) => {
      window.alert(event.target);
    },
  },
});

CloseButton.parameters = {
  badges: [BADGES.ALPHA],
};

export let Outline = (args) => ({
  Component: Chip,
  props: {
    ...args,
    outline: true,
    chipContent: "Test chip",
  },
  on: {
    change: (event) => {
      window.alert(event.target);
    },
  },
});

Outline.parameters = {
  badges: [BADGES.ALPHA],
};
