import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState('');
  const [userGitHub, setUserGitHub] = useState([]);

  async function loadDev() {
    if (user) {
      const apiUser = await axios.get(`https://api.github.com/users/${user}`);
      await setUserGitHub(apiUser.data);
    };
  };

  function changeDev(e) {
    setUser(e.target.value);
  };

  return (
    <div>
      <p>{userGitHub.login}</p>
      <label>Pesquisar por Dev</label>
      <input onChange={changeDev} />
      <button onClick={loadDev}>Click</button>
    </div>
  );
}

export default App;
