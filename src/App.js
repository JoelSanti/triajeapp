import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Components/Home';
import ListTriaje from './Components/ListTriaje';
import RegisterTriaje from './Components/RegisterTriaje';
import GeneralState from './context/generalState';
import AlertState from './context/alerts/alertState';
function App() {
  return (
    <AlertState>
    <GeneralState>
    <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/Listado" element={<ListTriaje/>}/>
          <Route  path="/Registro" element={<RegisterTriaje/>}/>
        </Routes>
    </Router>
    </GeneralState>
    </AlertState>
  );
}

export default App;
