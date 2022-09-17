import { Route, Routes } from 'react-router-dom';
import Dashboard from './containers/dashboard';
import CoinInformationDashboard from './containers/coin-information-dashboard';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/books' element={<CoinInformationDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
