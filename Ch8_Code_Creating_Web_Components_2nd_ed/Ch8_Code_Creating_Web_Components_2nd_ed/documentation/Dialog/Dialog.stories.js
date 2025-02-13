import Dialog from "./Dialog.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Notification Components/Dialog",
  component: Dialog,
  argTypes: {
    showDialog: { action: "boolean" },
    showBackground: { action: "boolean" },
    modalTitle: { action: "string" },
    modalText: { action: "string" },
  },
};

export const Default = {
  component: Dialog,
  args: {
    showDialog: true,
    modalTitle: "Modal title",
    modalText: "Click on the X to close me",
  },
  parameters: {
    docs: {
      story: {
        height: "300px",
        width: "300px",
      },
    },
  },
};

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const ClosedOnOpen = {
  component: Dialog,
  args: {
    showDialog: false,
    modalTitle: "Modal title",
    modalText: "This modal is closed on launch",
  },
  parameters: {
    docs: {
      story: {
        height: "300px",
        width: "300px",
      },
    },
  },
};

ClosedOnOpen.parameters = {
  badges: [BADGES.ALPHA],
};

export const NoBackground = {
  component: Dialog,
  args: {
    showDialog: false,
    showBackground: false,
    modalTitle: "Modal title",
    modalText: "This modal doesn't show a background",
  },
  parameters: {
    docs: {
      story: {
        height: "300px",
        width: "300px",
      },
    },
  },
};

NoBackground.parameters = {
  badges: [BADGES.ALPHA],
};
