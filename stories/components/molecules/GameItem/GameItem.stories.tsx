import { Meta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/GameItem";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
  tags: ['autodocs'],
  args: {
    img: '/assets/img/Thumbnail-1.png',
    titleGame: 'Super Mechs',
    category: 'Mobile',
  },
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});