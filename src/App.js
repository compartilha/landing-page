import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from './components/Landing';
import Login from './components/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Landing />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App