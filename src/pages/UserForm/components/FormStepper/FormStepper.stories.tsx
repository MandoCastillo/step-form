import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormStep from './FormStepper';

export default {
  title: 'pages/userForm/components/FormStepper',
  component: FormStep,
} as ComponentMeta<typeof FormStep>;

const Template: ComponentStory<typeof FormStep> = (args) => (
  <FormStep {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
