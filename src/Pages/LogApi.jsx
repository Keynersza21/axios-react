import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogApi = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorInput, setErrorInput] = useState(false);
  const [getUser, setGetUser] = useState([])
  const navigate = useNavigate();

  const sendForm = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      password: password,
    };

    if (!name || !password) {
      setErrorInput(true);
      console.log('Ingrese datos');
    } else {
      axios.post('https://peticiones.online/api/products', obj).then((res) => {
        localStorage.setItem('User', res.data.name) 
        console.log('res', res)
        navigate('/')
      });
    } 
  };

  return (
    <div>
      <form onSubmit={sendForm}>
        <label>User</label>
        <input
          className={errorInput ? 'message' : ''}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Password</label>
        <input
          className={errorInput ? 'message' : ''}
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="Submit">Send</button>
      </form>
    </div>
  );
};

export default LogApi;
