import {BrowserRouter,Routes,Route } from 'react-router-dom';
import{AuthProvider} from "./context/authContext";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import DietPage from './pages/DietPage';
import WeightControlPage from './pages/WeightControlPage';

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/perfil' element={<ProfilePage/>} />
        <Route path='/dieta' element={<DietPage/>} />
        <Route path='/controlPeso' element={<WeightControlPage/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}
export default App