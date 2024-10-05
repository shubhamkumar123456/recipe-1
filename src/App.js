
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ViewRecipe from './pages/ViewRecipe';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
       <div className='mb-16'>
       <Navbar/>
       </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/view" element={<ViewRecipe/>} />
                <Route path="/todo" element={<Todo/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
