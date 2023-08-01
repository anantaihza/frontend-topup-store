import { Meta } from "@storybook/react";
import Input, { InputProps } from "../../../../components/atoms/Input";

export default {
  title: "Components/Atom/Input",
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Full Name',
    type: 'text',
    nameInput: 'name',
    placeHolder: 'Enter your name'
  },
} as Meta;

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});

