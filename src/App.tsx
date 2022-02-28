import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Errorpage from './components/Errorpage'
import Register from './components/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Errorpage />} />
      </Routes>
       
    </Router>
  
  );
}

export default App;
