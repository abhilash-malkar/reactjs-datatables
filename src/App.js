import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from './app/Home';
import NormalTable from './app/Pages/NormalTable';
import FetchTable from './app/Pages/FetchTable';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/app/pages/normal-table' element={<NormalTable/>}/>
          <Route path='/app/pages/fetch-table' element={<FetchTable/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;