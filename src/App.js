import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './containers/dashboard';
import CoinInformationDashboard from './containers/coin-information-dashboard';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/coins/:id' element={<CoinInformationDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
