import React, { useState } from 'react';
import axios from 'axios';

import RenderDev from './components/RenderDev';
import SearchDev from './components/SearchDev';
import ErrorInfo from './components/ErrorInfo';

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

        setNamePlaceHolderUser(`${user}, informe outro usuário...`);
      } else {
        setNamePlaceHolderUser('Favor, informar um usuário do GitHub...');
      };
      setInfoError(null);
    } catch (error) {
      console.log(error.response);
      setInfoError(`Usuário "${user}" não existe / Erro na requisição!`);
      setUserGitHub([]);
      setUserGitHubRepos([]);
    };
  };

  function changeDev(event) {
    setUser(event.target.value);
  };

  return (
    <div>
      <SearchDev
        loadDev={loadDev}
        changeDev={changeDev}
        namePlaceHolderUser={namePlaceHolderUser}
      />
      <ErrorInfo
        error={infoError}
      />
      <RenderDev
        userGitHub={userGitHub}
        userGitHubRepos={userGitHubRepos}
      />
    </div>
  );
};

export default App;
