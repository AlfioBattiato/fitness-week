import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Mynavbar from "./components/Mynavbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Backoffice from "./components/Backoffice";
import Register from "./components/Register";
import { useDispatch, useSelector } from "react-redux";
import Detail from "./components/Detail";
import axios from "axios";
import { useEffect, useState } from "react";
import { LOGIN } from "./redux/actions";
import ProtectedRoutes from "./components/ProtectedRoutes";
import CorsiUtente from "./components/CorsiUtente";
import Dashboard from "./components/Dashboard";
import PasswordReset from "./components/PasswordReset";

function App() {
  const user = useSelector((state) => state.user);
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios("/api/user")
      .then((res) =>
        dispatch({
          type: LOGIN,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err))
      .finally(() => setLoaded(true));
  }, [dispatch]);

  return (
    loaded && (
      <BrowserRouter>
        <Mynavbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/Login/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/password-reset/:token" element={<PasswordReset />} />
              <Route path="/corsiutente/:id" element={<CorsiUtente />} />
              <Route path="/dashboard/:id" element={<Dashboard />} />
            </Route>

            <Route path="/Register/" element={<Register />} />
            <Route path="/backoffice/" element={<Backoffice />} />

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
    )
  );
}

export default App;
