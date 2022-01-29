import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import Addmovies from './components/Addmovies';
import Allmovies from './components/Allmovies'
import Formval from './components/Formval';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
function App() {
  let data = {
    earning:"1,00,000",
    annual:"2,50,00000",
    task:20,
    pending:26,
  }
  return <>
    <BrowserRouter>
    <div id="design" style={{display:"grid",gridTemplateColumns:"20% 80%"}}>
            <div >
                <Sidebar/>
            </div>
            <Routes>
              <Route path='/dashboard' element={<Dashboard data={data}/>}/>
              <Route path='/add-movies' element={<Addmovies/>}/>
              <Route path='/all-movies' element={<Allmovies/>}/>
              <Route path='/form-validation' element={<Formval/>}/>
              <Route path = '/' element={<Dashboard data={data}/>}/>
            </Routes>
            </div>
    </BrowserRouter>
  </>
}

export default App;
