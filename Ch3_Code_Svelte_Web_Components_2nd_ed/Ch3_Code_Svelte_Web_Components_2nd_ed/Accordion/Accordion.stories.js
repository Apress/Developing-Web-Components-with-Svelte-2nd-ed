import Accordion from "../Accordion/Accordion.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Action Components/Accordion",
  component: Accordion,
  argTypes: {
    isOpen: false,
    data: [],
  },
  parameters: {
    docs: {
      story: {
        height: "500px",
      },
    },
  },
};

export const Default = {
  Component: Accordion,
  args: {
    isOpen: false,
    data: [
      {
        title: "Heading 1",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, nulla sed lacinia accumsan, ligula arcu interdum urna, eget rhoncus sapien orci scelerisque metus.",
      },
      {
        title: "Heading 2",
        text: "In bibendum commodo orci nec semper. Nam magna mauris, ornare eu semper sit amet, vehicula sed metus",
      },
      {
        title: "Heading 3",
        text: "Mauris tortor mi, scelerisque nec metus nec, finibus euismod lacus. Maecenas non porttitor arcu",
      },
    ],
  },
};

Default.parameters = {
  badges: [BADGES.ALPHA],
};
