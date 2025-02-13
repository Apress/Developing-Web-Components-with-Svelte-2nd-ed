import Chip from "./Chip.svelte";

export default {
  title: "Garnet UI Library/Navigation Components/Chip",
  component: Chip,
  argTypes: {
    oninput: { action: "changed" },
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
