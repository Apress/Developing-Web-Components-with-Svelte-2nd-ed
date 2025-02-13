import SelectBox from "./SelectBox.svelte";
import SelectBoxDecorator from "./SelectBoxDecorator.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

let optionValues = [
  { id: 1, value: "aaa" },
  { id: 2, value: "bbb" },
  { id: 3, value: "ccc" },
  { id: 4, value: "ddd" },
];

export default {
  title: "Garnet UI Library/Action Components/SelectBox",
  component: SelectBox,
  decorators: [() => SelectBoxDecorator],
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "value" },
    oninput: { action: "changed" },
    selectOptions: optionValues,
  },
};

export const Default = () => ({
  Component: SelectBox,
  props: {
    selectOptions: optionValues,
    label: "",
  },
  on: {
    change: (event) => {
      document.getElementById("message4").innerHTML =
        `SelectBox value is ${JSON.stringify(event.detail.text.value)}`;
    },
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const WithLabel = () => ({
  Component: SelectBox,
  props: {
    selectOptions: optionValues,
    label: "This is a test",
  },
  on: {
    change: (event) => {
      document.getElementById("message4").innerHTML =
        `SelectBox value is ${JSON.stringify(event.detail.text.value)}`;
    },
  },
});

WithLabel.parameters = {
  badges: [BADGES.ALPHA],
};

export const Disabled = {
  component: SelectBox,
  args: {
    selectOptions: optionValues,
    disabled: true,
  },
};

Disabled.parameters = {
  badges: [BADGES.ALPHA],
};
