import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [log, setLog] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users`)
      .then((res) => res.json())
      .then((data) => setLog(data));
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    const user = log.find((u) => u.username === username && u.password === password);
    if (user) {
      // Successful login
      alert('Login successful');
      setError('');
      // Redirect to product page
      navigate('/product');
    } else {
      // Invalid credentials
      alert('Invalid username or password');
      setError('');
    }
  }

  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-6 mt-5">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input className='mb-3 mt-3 form-control' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
            <input className='mb-3 form-control' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
            <button className='btn btn-primary mb-5' type="submit">Login</button><br />
          </form>
        </div>
      </div>
      {error && <div className="error">{error}</div>}

      <div className='d-flex align-item-end justify-content-end text-secondary' style={{fontSize:'12px'}}>
        <p>Get user name and password from <a target="_blank" href="https://fakestoreapi.com/users">Here.</a></p>
      </div>
    </div>
  );
}

export default Login;
