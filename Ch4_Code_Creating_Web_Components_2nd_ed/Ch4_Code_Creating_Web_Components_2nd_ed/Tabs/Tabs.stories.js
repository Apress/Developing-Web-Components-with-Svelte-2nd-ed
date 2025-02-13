import Tabs from "./Tabs.svelte";
import tabItems from "./tabsdata.json";

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

export const Vertical = {
  args: {
    vertical: true,
    items: tabItems,
  },
};
