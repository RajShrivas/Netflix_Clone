import './App.scss';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/login" element={<Login></Login>} />
      </Routes>
     
    </Router>
  );
}

export default App;
