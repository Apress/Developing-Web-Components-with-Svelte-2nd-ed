import Button from "../Button/Button.svelte";
import ButtonDecorator from "./ButtonDecorator.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

const meta = {
  title: "Garnet UI Library Themed/Button",
  decorators: [() => ButtonDecorator],
  parameters: {
    badges: [],
  },
};

export default {
  title: "Garnet UI Library Themed/Button",
  component: Button,
  ...meta,
};

export const Default = (args) => ({
  Component: Button,
  props: {
    ...args,
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};
