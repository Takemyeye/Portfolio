import './App.css'
import Home from './component/Home';
import NotFound from './component/404';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App () {
  
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='*' element={<NotFound />} />
    </Routes>
  </Router>
  );
}

export default App;
