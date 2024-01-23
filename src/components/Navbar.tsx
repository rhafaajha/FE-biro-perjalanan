import React from 'react';
import { useRoutes } from 'react-router-dom';
import Link from 'react-router-dom';
import Button from './Button';
import '../style/global.css';

export default function Navbar() {
  // const route = useRoutes
  // console.log(route, 'route')
  // const isAdminRoute = route.pathname.includes("admin") || route.pathname.includes("login") || route.pathname.includes("register");
  // const isLoginRoute = route.pathname === "/login/admin" || route.pathname === "/login"

  // const Logout = async () => {
  //   localStorage.removeItem('token');
  //   route.push('/');
  // };

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
              <Button title="Login" disabled={false}></Button>
            </div>
          </nav>
        </header>
      }
    </div>
  );
}
