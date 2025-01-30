import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Loader } from "../Loader/Loader";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme/theme";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    color: { control: "color" },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const WithLoader: Story = {
  args: {
    children: "Loading...",
    disabled: true,
  },
  render: (args) => (
    <Button {...args}>
      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Loader size="sm" />
        {args.children}
      </span>
    </Button>
  ),
};
