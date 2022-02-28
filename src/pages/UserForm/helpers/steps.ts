import { FC } from 'react';
import BankAccount from '../components/BankAccount/BankAccount';
import CompanyData from '../components/CompanyData/CompanyData';

interface Step {
  position: number;
  label: string;
  Component: FC;
}

const steps: Step[] = [
  {
    position: 1,
    label: 'Datos de la empresa',
    Component: CompanyData,
  },
  {
    position: 2,
    label: 'Domicilio de la empresa',
    Component: BankAccount,
  },
  // {
  //   position: 3,
  //   label: 'Representante legal',
  // },
  // {
  //   position: 4,
  //   label: 'Representante legal domicilio',
  // },
  // {
  //   position: 5,
  //   label: 'Cuenta bancaria',
  // },
];

export default steps;
