import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage.tsx';
import { About } from './pages/About.tsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
