import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import '../style/global.css';

export default function Navbar() {
  // const route = useLocation()
  // console.log(route, 'route')
  // const isLoginRoute = route.pathname === "/login" || route.pathname === "/register"

  const navigate = useNavigate()
  const Logout = async () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      {
        <header>
          <nav className="navbar">
            <div className="logo">
              <a href={'/'}>
                <img
                  src={'./plane-trip-1.png'}
                  width={30}
                  height={30}
                  alt="logo"
                />
                Biro Perjalanan
              </a>
            </div>
            <div className="navigation">
              <a href={'/'}>Home</a>
              <a href={'/data-turis'}>Data Turis</a>  
            </div>
            <div className='account'>
              <a href={'/register'}>Buat Akun</a>
              <Link to="/login"><Button title="Login" disabled={false}></Button></Link>
            </div>
          </nav>
        </header>
      }
    </div>
  );
}
