import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/eCommerceSlice';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBolyzhM_ri3M44pTTaXrVD0L7HRaqE7_I',
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (res.ok) {
                const data = await res.json();
                dispatch(login(data.idToken));
                setTimeout(() => {
                    navigate('/store');
                }, 1000);
            } else {
                const data = await res.json();
                let errorMessage = 'Authentication Failed!';
                if (data && data.error && data.error.message) {
                    errorMessage = data.error.message;
                }
                throw new Error(errorMessage);
            }
        } catch (err) {
            alert(err.message);
        }

        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <div style={{ marginInline: "35%", marginBlock: "8%", paddingInline: "40px", paddingBlock: "40px", backgroundColor: "#6ecff5", borderRadius: "round" }}>
                <h1 className='mb-4'>Login</h1>
                <form onSubmit={submitHandler}>
                    <label className="form-label">Email Address:</label>
                    <input
                        type="email"
                        value={email}
                        className="form-control mb-3"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        minLength="6"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn btn-info px-5 py-2 mt-4">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;