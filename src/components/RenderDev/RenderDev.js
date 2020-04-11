import React from 'react';
import moment from 'moment';

import './style.css';

const RenderDev = ({ userGitHub, userGitHubRepos }) => {
  return (
    <>
      <div className="dev-header">
        <div className="dev-photo">
          <img src={userGitHub.avatar_url || "https://png.pngtree.com/svg/20161027/service_default_avatar_182956.png"} alt={userGitHub.login || 'undefined'} />
        </div>
        <div className="dev-info">
          <p><span>Login:</span> {userGitHub.login || 'undefined'}</p>
          <p><span>Biografia:</span> {userGitHub.bio || 'undefined'}</p>
          <p><span>Seguidores:</span> {userGitHub.followers || 'undefined'}</p>
          <p><span>Localização:</span> {userGitHub.location || 'undefined'}</p>
          <a href={userGitHub.html_url || '#'} target={userGitHub.html_url ? 'blank' : null}><span>GitHub:</span> {userGitHub.html_url || 'undefined'}</a>
        </div>
      </div>

      {userGitHubRepos.length > 0 ? (
        <div className="dev-container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Data de criação</th>
                <th scope="col">Ultima atualização</th>
                <th scope="col">Link</th>
              </tr>
            </thead>
            <tbody>
              {userGitHubRepos.map((repositories, i) => (
                <tr key={i}>
                  <td>{repositories.id}</td>
                  <td>{repositories.name}</td>
                  <td>{moment(repositories.created_at).format('DD/MM/YYYY')}</td>
                  <td>{moment(repositories.updated_at).format('DD/MM/YYYY')}</td>
                  <td><a href={repositories.html_url} target="blank">{repositories.name}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h3 className="error">Sem repositórios</h3>
        </div>
      )}
    </>
  );
};

export default RenderDev;
