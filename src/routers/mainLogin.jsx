import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from '../components/login/loginScreen.jsx';
import ListAnime from './listAnime.jsx';

export const MainLogin= () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<LoginScreen />} />
                <Route path="/*" element={<ListAnime />} />
            </Routes>
        </Router>
    );
}