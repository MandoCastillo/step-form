import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select, { SelectProps } from './Select';
import countries from '../../helpers/countries.json';
import { Country } from '../../helpers/country.types';

export default {
  title: 'components/inputs/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template =
  <T extends {}>(): ComponentStory<SelectProps<T>> =>
  (args) =>
    <Select<T> {...args} />;
// const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
// const Template = <T extends {}>
const countriesBasic = [...countries] as Country[];

export const Basic = Template<Country>().bind({});
Basic.args = {
  options: countriesBasic,
  displayValue: 'countryName',
};

export const WithLabel = Template<Country>().bind({});
WithLabel.args = {
  options: [],
  displayValue: 'countryName',
  label: 'Country',
};

const countriesError = [...countries] as Country[];

export const Error = Template<Country>().bind({});
Basic.args = {
  options: countriesError,
  displayValue: 'countryName',
  error: 'Campo requerido',
};

// export const WithLabel = Template.bind({});
// WithLabel.args = {
//   label: 'Tacos',
// };

// export const File = Template.bind({});
// File.args = {
//   type: 'file',
// };

// export const Error = Template.bind({});
// Error.args = {
//   label: 'Tacos',
//   error: 'Campo necesario',
// };
