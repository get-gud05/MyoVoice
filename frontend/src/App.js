import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MutePage from './pages/MutePage';
import DeafPage from './pages/DeafPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mute" element={<MutePage />} />
        <Route path="/deaf" element={<DeafPage />} />
      </Routes>
    </Router>
  );
}