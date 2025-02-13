import Table from "./Table.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Grid Components/Grid",
  component: Table,
  label: "Example ImageGrid",
  argTypes: {
    val: 1,
    min: 0,
    max: 100,
    step: 10,
    ticks: false,
  },
  parameters: {
    docs: {
      story: {
        height: "100px",
      },
    },
  },
};

export const Default = {
  args: {
    columnCount: 1,
    rowCount: 4,
    border: "none",
    displayImages: false,
    itemCount: 12,
    label: "Example Grid",
  },
};

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const WithPlaceholderImages = {
  args: {
    columnCount: 1,
    rowCount: 4,
    border: "none",
    displayImages: true,
    itemCount: 12,
    displayImageLabels: false,
    label: "Example Grid with Placeholder Images",
  },
};

WithPlaceholderImages.parameters = {
  badges: [BADGES.ALPHA],
};

export const WithImagesAndLabels = {
  args: {
    columnCount: 1,
    rowCount: 4,
    border: "none",
    displayImages: true,
    itemCount: 12,
    displayImageLabels: true,
    imageLabel: "This is a test image",
    label: "Example Grid with Placeholder Images and Labels",
  },
};

Default.parameters = {
  badges: [BADGES.ALPHA],
};
