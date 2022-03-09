import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Errorpage from './components/Errorpage'
import Register from './components/Register';
// import PrivateRoute from './components/PrivateRoutes';
import Data1 from './components/Data1';
import Data2 from './components/Data2';
import Data3 from './components/Data3';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        {/* <Route path="/dashboard" element={ <PrivateRoute><Dashboard/></PrivateRoute>}/> */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} exact={true}/> */}
        {/* <Route path="/dashboard" element={ <PrivateRoute><Dashboard/></PrivateRoute>}/> */}
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}>

              <Route path="data1" element={<Data1/>}/>
              <Route path="data2" element={<Data2/>}/>
              <Route path="data3" element={<Data3/>}/>

        </Route>


        <Route path="*" element={<Errorpage />} />
      </Routes>
       
    </Router>
  
  );
}

export default App;
