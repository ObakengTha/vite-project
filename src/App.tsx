import './App.css';
import HomePage from './Pages/home';
import LoginPage from './Pages/Login';
import ForgotPasswordPage from './Pages/ForgotPassword';
import DashboardPage from './Pages/Dashboard';

function App() {
  return (
    <div>
      <HomePage />
      <LoginPage />
      <ForgotPasswordPage />
      <DashboardPage role="admin" />
    </div>
  );
}

export default App;
