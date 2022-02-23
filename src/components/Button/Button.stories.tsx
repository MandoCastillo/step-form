import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BeakerIcon, PlusIcon } from '@heroicons/react/solid';

import Button from './Button';

export default {
  title: 'components/buttons/Button',
  component: Button,
  argTypes: {
    type: { control: 'select' },
    icon: { control: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};

export const Cancel = Template.bind({});
Cancel.args = {
  type: 'cancel',
  label: 'Button',
};

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  label: 'Button',
  icon: <BeakerIcon />,
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <PlusIcon />,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  isLoading: true,
};
