import Breadcrumbs from "./Breadcrumbs.svelte";

let levels = [
  { href: "/", text: "Dashboard" },
  { href: "/reports", text: "Annual reports" },
  { href: "/reports/2019", text: "2019" },
];

export default {
  title: "Garnet UI Library/Navigation Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    BreadcrumbItems: levels,
    image: { control: "boolean" },
  },
};

export const Default = (args) => ({
  Component: Breadcrumbs,
  props: {
    ...args,
    breadcrumbItems: [
      { href: "/", text: "Dashboard" },
      { href: "/reports", text: "Annual reports" },
      { href: "/reports/2024", text: "2024" },
    ],
  },
});

export const CustomImage = (args) => ({
  Component: Breadcrumbs,
  props: {
    ...args,
    iconFamily: "material-symbols",
    iconName: "arrow-right-alt",
    breadcrumbItems: [
      { href: "/", text: "Dashboard" },
      { href: "/reports", text: "Annual reports" },
      { href: "/reports/2024", text: "2024" },
    ],
  },
});

export const TextDivider = (args) => ({
  Component: Breadcrumbs,
  props: {
    ...args,
    divider: ">>",
    breadcrumbItems: [
      { href: "/", text: "Dashboard" },
      { href: "/reports", text: "Annual reports" },
      { href: "/reports/2024", text: "2024" },
    ],
  },
});
