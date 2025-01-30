import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme/theme";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

const Template: Story = {
  render: (args) => (
    <div style={{ padding: "2rem", background: "#fff" }}>
      <Loader {...args} />
    </div>
  ),
};

export const Small: Story = {
  ...Template,
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  ...Template,
  args: {
    size: "md",
  },
};

export const Large: Story = {
  ...Template,
  args: {
    size: "lg",
  },
};

export const DarkTheme: Story = {
  ...Template,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <div style={{ padding: "2rem", background: lightTheme.body }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
