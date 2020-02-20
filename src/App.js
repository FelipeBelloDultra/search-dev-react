import React, { useState } from 'react';
import axios from 'axios';

import RenderDev from './components/RenderDev';
import SearchDev from './components/SearchDev';

import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [userGitHub, setUserGitHub] = useState([]);
  const [userGitHubRepos, setUserGitHubRepos] = useState([]);
  const [namePlaceHolderUser, setNamePlaceHolderUser] = useState('Informe o usuário do GitHub...');
  const [infoError, setInfoError] = useState(null);

  async function loadDev() {
    try {
      if (user.length) {
        const apiUser = await axios.get(`https://api.github.com/users/${user}`);
        await setUserGitHub(apiUser.data);

        const apiUserRepos = await axios.get(`https://api.github.com/users/${user}/repos`);
        await setUserGitHubRepos(apiUserRepos.data);
        setNamePlaceHolderUser('Informe o usuário do GitHub...');
      } else {
        setNamePlaceHolderUser('Favor informar um usuário...');
      };
      setInfoError(null);
    } catch (error) {
      setInfoError(`O usuário "${user}" não existe, verifíque se foi escrito de forma correta!`);
      setUserGitHub([]);
      setUserGitHubRepos([]);
    };
  };

  function changeDev(event) {
    setUser(event.target.value);
  };

  return (
    <div>
      <SearchDev loadDev={loadDev} changeDev={changeDev} namePlaceHolderUser={namePlaceHolderUser} />
      <h1>{infoError}</h1>
      <RenderDev userGitHub={userGitHub} userGitHubRepos={userGitHubRepos} />
    </div>
  );
}

export default App;
