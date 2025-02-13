import Avatar from "../Avatar/Avatar.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/React Components/Avatar",
  component: Avatar,
  props: {
    status: "available",
    src: "/avatar.png",
  },
};

export const Default = () => ({
  Component: Avatar,
  props: {
    statusSize: "small",
    src: "/avatar.png",
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const Busy = () => ({
  Component: Avatar,
  props: {
    status: "busy",
    src: "/avatar.png",
  },
});

Busy.parameters = {
  badges: [BADGES.ALPHA],
};

export const Away = () => ({
  Component: Avatar,
  props: {
    status: "away",
    statusSize: "large",
    src: "/avatar.png",
  },
});

Away.parameters = {
  badges: [BADGES.ALPHA],
};

export const Unavailable = () => ({
  Component: Avatar,
  props: {
    status: "unavailable",
    statusSize: "medium",
    src: "/avatar.png",
  },
});

Unavailable.parameters = {
  badges: [BADGES.ALPHA],
};
