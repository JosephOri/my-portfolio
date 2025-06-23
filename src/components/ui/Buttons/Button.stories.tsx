import type { Meta, StoryObj } from "@storybook/react";
import { ContactMessageButton } from "./Button";
import { Loader } from "../Loader/Loader";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../theme/theme";

const meta: Meta<typeof ContactMessageButton> = {
  title: "Components/Button",
  component: ContactMessageButton,
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
type Story = StoryObj<typeof ContactMessageButton>;

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
    <ContactMessageButton {...args}>
      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Loader size="sm" />
        {args.children}
      </span>
    </ContactMessageButton>
  ),
};
