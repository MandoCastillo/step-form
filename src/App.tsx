import { Provider } from 'react-redux';
import UserForm from './pages/UserForm/UserForm';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <UserForm />
    </Provider>
  );
};

export default App;
