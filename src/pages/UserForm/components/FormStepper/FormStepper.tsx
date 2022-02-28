import { FC } from 'react';
import Step from '../../../../components/Step/Step';
import { useAppSelector } from '../../../../redux/store';
import steps from '../../helpers/steps';

interface FormStepperProps {}

const FormStepper: FC<FormStepperProps> = () => {
  const { currentPage } = useAppSelector((state) => state.userForm);
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {steps.map((step) => (
        <Step
          key={step.position}
          label={step.label}
          step={step.position.toString()}
          active={step.position === currentPage}
        />
      ))}
    </div>
  );
};

export default FormStepper;
