//import Button from "./components/Button";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Feed } from './pages/feed';

import { Home } from './pages/home'
import { Teste1 } from './pages/hooks'
import { Login } from './pages/login'
import { GlobalStyle } from './styles/global'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/hooks" element={<Teste1/>} />
      </Routes>
    </Router>
  );
}

export default App;
