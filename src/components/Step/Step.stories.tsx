import { ComponentMeta, ComponentStory } from '@storybook/react';
import Step from './Step';

export default {
  title: 'components/Step',
  component: Step,
} as ComponentMeta<typeof Step>;

const Template: ComponentStory<typeof Step> = (args) => <Step {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Datos de la empresa',
  step: '1',
};

export const Active = Template.bind({});
Active.args = {
  label: 'Domicilio de la empresa',
  step: '2',
  active: true,
};
