import Tabs from "./Tabs.svelte";
import tabItems from "./tabsdata.json";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Navigation Components/Tabs",
  component: Tabs,
  argTypes: {
    vertical: false,
    items: tabItems,
  },
};

export const Default = {
  args: {
    vertical: false,
    items: tabItems,
  },
};

Default.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};

export const Vertical = {
  args: {
    vertical: true,
    items: tabItems,
  },
};

Vertical.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};
