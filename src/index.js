import { render } from 'react-dom';
import { AuthContextProvider } from './store/auth-context';
import App from './App';
import './index.css';

render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);
