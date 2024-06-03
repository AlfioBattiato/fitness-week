import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../redux/actions';

const PasswordReset = () => {
    const dispatch=useDispatch()
    const { token } = useParams();
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    const navigate=useNavigate()
    const user=useSelector((state)=>state.user)

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
        .post('/reset-password', {email,password,password_confirmation:confirmPassword,token})
        .then(
            (response) => {
                dispatch({ type: LOGOUT });
                navigate(`/dashboard/`)

            }
        )

      
    };

    return (
        <div className='container py-5 my-5'>
            <h1>Reset della Password</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nuova Password:
                        <br />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            name='password'
                            className='mt-2'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Conferma Nuova Password:
                        <br />
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            name='password_confirmation'
                            className='mt-2'


                        />
                    </label>
                </div>
                <button type="submit"   className='mt-2'>Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PasswordReset;
