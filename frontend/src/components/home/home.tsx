import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';



const Home: React.FC = () => {
    const navigate = useNavigate();
    
    
    const handleLogin = () => {
        navigate('/dashboard')
    };

    return (
        <div className='login'>
            <button className='btn btn-info w-25' onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Home;


