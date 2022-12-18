import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import BlogDetail from "./pages/blogdetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route
              path="*"
              element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
