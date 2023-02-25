// rfce
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  // hooks data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // pasang usNavigate
  const navigate = useNavigate();
  // buat function validate username dan password
  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please enter a Username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter a Password');
    }
    return result;
  };
  // buat handle login  & fetch
  const handleLogin = (e) => {
    e.preventDefault();
    // pasang validation & toastify
    if (validate()) {
      fetch(`http://localhost:8000/users?username=${username}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          if (res.length === 0) {
            toast.error('Please enter a valid Username');
          } else {
            if (res[0].password === password) {
              toast.success('Success Login!');
              navigate('/');
            } else {
              toast.error('Please enter valid Credentials');
            }
          }
        })
        .catch((err) => {
          toast.error('Login Failed:' + err.message);
        });
    }
  };


  return (
    <div className='row'>
      <div className='offset-lg-3 col-lg-6'>
        <form onSubmit={handleLogin} className='container mt-5'>
          <div className='card'>
            <div className='card-header'>
              <h2>User Login</h2>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label htmlFor='username'>
                  Username <span className='errmsg'>*</span>
                </label>
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>
                  Password <span className='errmsg'>*</span>
                </label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-control'
                />
              </div>
            </div>
            <div className='card-footer'>
              <button type='submit' className='btn btn-primary mx-2'>
                Login
              </button>
              <Link to='/register' className='btn btn-success'>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
