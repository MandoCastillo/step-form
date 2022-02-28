import { FC } from 'react';
import CurrentStep from './components/CurrentStep/CurrentStep';
// import { useAppSelector } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import FormStepper from './components/FormStepper/FormStepper';
import { nextPage, prevPage } from './slice/userFormSlice';

interface UserFormProps {}

const UserForm: FC<UserFormProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <FormStepper />
      <CurrentStep />

      <button type="button" onClick={() => dispatch(prevPage())}>
        Prev
      </button>
      <button type="button" onClick={() => dispatch(nextPage())}>
        Next
      </button>
    </div>
  );
};

export default UserForm;
