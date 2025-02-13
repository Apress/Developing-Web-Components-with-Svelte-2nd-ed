import Slider from "./Slider.svelte";

export default {
  title: "Garnet UI Library/Basic Components/Slider",
  component: Slider,
  label: "Example Slider",
  argTypes: {
    val: 1,
    min: 0,
    max: 100,
    step: 10,
    ticks: false,
  },
};

export const Default = {
  args: {
    label: "Text:",
  },
};

export const Step = {
  args: {
    step: 25,
    ticks: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
