import Tooltip from "../Tooltip/Tooltip.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Notification Components/ToolTip",
  component: Tooltip,
  argTypes: {
    tip: '<p>This is an informational tooltip - to learn more <a href="/tutorial">click here</a></p>',
    showHTML: false,
    timeout: "400",
    label: "more info",
  },
  parameters: {
    docs: {
      story: {
        height: "120px",
      },
    },
  },
};

export const Default = {
  args: {
    tip: '<p>This is an informational tooltip - to learn more <a href="/tutorial">click here</a></p>',
    showHTML: false,
    timeout: "400",
    label: "more info",
  },
};

Default.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};

export const CustomHTML = {
  args: {
    tip: '<p>This is an informational tooltip with custom markup - to learn more <a href="/tutorial">click here</a></p>',
    showHTML: true,
    timeout: "300",
    label: "more info",
  },
};

CustomHTML.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};
