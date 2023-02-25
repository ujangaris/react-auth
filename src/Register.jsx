// rfce
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
// inport IsValidate
import { IsValidate } from './IsValidate';

function Register() {
  // hooks data
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('male');
  // pasang usNavigate
  const navigate = useNavigate();
  //buat handele submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = {
      id,
      username,
      name,
      password,
      email,
      phone,
      country,
      address,
      gender,
    };
    // pasang Isvalidate
    if (
      IsValidate({ username, name, password, email, phone, country, address })
    ) {
      // console.log(regobj);
      fetch(`http://localhost:8000/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success('Register successfully');
          navigate('/login');
        })
        .catch((err) => {
          toast.error('Failed:' + err.message);
        });
    }
  };
  return (
    <div>
      <div className='offset-lg-3 col-lg-6'>
        <form className='container mt-5' onSubmit={handleSubmit}>
          <div className='card'>
            <div className='card-header'>
              <h1>User Registration</h1>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>
                      User Name<span className='errmsg'>*</span>
                    </label>
                    <input
                      type='text'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='form-control'
                    />
                    <input
                      type='hidden'
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className='form-control'
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>
                      Password<span className='errmsg'>*</span>
                    </label>
                    <input
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='form-control'
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>
                      Full Name<span className='errmsg'>*</span>
                    </label>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='form-control'
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>
                      Email<span className='errmsg'>*</span>
                    </label>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='form-control'
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>
                      Phone<span className='errmsg'>*</span>
                    </label>
                    <input
                      type='number'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className='form-control'
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>
                      Country<span className='errmsg'>*</span>
                    </label>
                    <select
                      className='form-select'
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value=''>Choose Country</option>
                      <option value='indonesia'>Indonesia</option>
                      <option value='mekah'>Mekah</option>
                      <option value='madinah'>Madinah</option>
                    </select>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>
                      Address<span className='errmsg'>*</span>
                    </label>
                    <textarea
                      className='form-control'
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label>
                      Gender<span className='errmsg'>*</span>
                    </label>
                    <br />
                    <input
                      type='radio'
                      checked={gender === 'male'}
                      onChange={(e) => setGender(e.target.value)}
                      name='gender'
                      value='male'
                      className='form-check-input mx-2'
                    />
                    <label>Male</label>
                    <input
                      type='radio'
                      checked={gender === 'female'}
                      onChange={(e) => setGender(e.target.value)}
                      name='gender'
                      value='female'
                      className='form-check-input mx-2'
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-footer'>
              <button type='submit' className='btn btn-primary mx-2'>
                ReGister
              </button>
              {/* import dan pasang Link dari react-router-dom */}
              <Link to='/' className='btn btn-danger'>
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
