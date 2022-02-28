import { FC } from 'react';
import { useAppSelector } from '../../../../redux/store';
import steps from '../../helpers/steps';

const CurrentStep: FC = () => {
  const { currentPage } = useAppSelector((state) => state.userForm);

  const StepToRender = steps.find(
    (step) => step.position === currentPage,
  )?.Component;

  if (!StepToRender) return null;

  return <StepToRender />;
};

export default CurrentStep;
