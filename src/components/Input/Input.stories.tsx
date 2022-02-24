import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
  title: 'components/inputs/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Tacos',
};

export const File = Template.bind({});
File.args = {
  type: 'file',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Tacos',
  error: 'Campo necesario',
};
