import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            {/* hard coded */}
            <Route path='/' element={<div>Home page</div>}></Route>
            <Route path='/about' element={
            <div>
              <h2>About</h2>
            </div>
            }></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
