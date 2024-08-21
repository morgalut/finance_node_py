import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    </Router>
);

export default App;
