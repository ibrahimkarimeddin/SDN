import {BrowserRouter,Route, Routes} from 'react-router-dom'
import HomePage from './page/Home/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path='/' element={<HomePage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
