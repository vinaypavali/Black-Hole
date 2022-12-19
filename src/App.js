import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home' 


function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/search" element={<h1>This is is Search Page</h1>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
