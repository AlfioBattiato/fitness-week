import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const GuestRouts = () => {
    const user = useSelector((state) => state.user);

    return !user ? <Outlet /> : <Navigate to="/" />;
};

export default GuestRouts;
