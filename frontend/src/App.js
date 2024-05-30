import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Mynavbar from './components/Mynavbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { useSelector } from 'react-redux';
import Detail from './components/Detail';
import axios from 'axios';


function App() {
    const user = useSelector((state) => state.user);
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

  return (
    <BrowserRouter>
    <Mynavbar />
    <div className="container">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/detail/:id" element={<Detail />} />



            <Route path="/Login/" element={<Login />} />
            <Route path="/Register/" element={<Register />} />


            
            {/* {user=== null &&(
                <Route path="/" element={<Login />} />

            )} */}





            {/* rotte accessibili da tutti */}

            {/* rotte accessibili solo se sei loggato */}
            {/* <Route element={<ProtectedRoutes />}>
                <Route
                    path="/faculties/:id"
                    element={<FacultyPage />}
                />
                <Route
                    path="/transcript"
                    element={<Transcript />}
                />
            </Route> */}

            {/* rotte accessibili solo se NON sei loggato */}


            {/* <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} /> */}
        </Routes>
    </div>

    <Footer />
</BrowserRouter>
  );
}

export default App;
