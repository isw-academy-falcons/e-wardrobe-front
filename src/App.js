import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css';
import Homescreen from './pages/Homescreen';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homescreen/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
