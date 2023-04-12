import { Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import HomeAluno from './Pages/HomeAluno';
import HomeCoord from './Pages/HomeCoord';

import './styles/main.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/aluno' element={<HomeAluno />} />
                <Route path='/coord' element={<HomeCoord />} />
            </Routes>

        </>
    );
}

export default App;
