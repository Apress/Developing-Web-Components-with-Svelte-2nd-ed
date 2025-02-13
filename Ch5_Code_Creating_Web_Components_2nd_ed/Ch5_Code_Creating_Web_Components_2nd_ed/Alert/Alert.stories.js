import Alert from "./Alert.svelte";

export default {
  title: "Garnet UI Library/Notification Components/Alert",
  component: Alert,
  argTypes: {
    type: { control: "string" },
    title: { control: "string" },
    description: { control: "string" },
    showIcon: { action: "boolean" },
  },
  parameters: {
    docs: {
      story: {
        height: "100px",
      },
    },
  },
};

export const Default = () => ({
  Component: Alert,
  props: {
    show: true,
    type: "info",
    title: "Simple Info",
    description: "An info description",
    showIcon: "true",
  },
});

export const Warn = () => ({
  Component: Alert,
  props: {
    show: true,
    type: "warn",
    title: "Simple warning",
    description: "A warning message",
    showIcon: "true",
  },
});

export const Error = () => ({
  Component: Alert,
  props: {
    show: true,
    type: "error",
    title: "Error message",
    description: "An error message",
    showIcon: "true",
  },
});
