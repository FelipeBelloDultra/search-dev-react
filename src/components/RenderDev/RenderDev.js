import React from 'react';

const RenderDev = ({ userGitHub, userGitHubRepos }) => {
  return (
    <div>
      <p>{userGitHub.login || 'undefined'}</p>
      <p>{userGitHub.location || 'undefined'}</p>
      <p>{userGitHub.bio || 'undefined'}</p>
      <a href={userGitHub.html_url || '#'} target={userGitHub.html_url ? 'blank' : null}>{userGitHub.html_url || 'undefined'}</a>
      <p>{userGitHub.url || 'undefined'}</p>
      <img className="img-user" src={userGitHub.avatar_url || "https://png.pngtree.com/svg/20161027/service_default_avatar_182956.png"} alt={userGitHub.login || 'undefined'} />
      <ul>
        {userGitHubRepos.map(repositories => (
          <li key={repositories.id}><a href={repositories.html_url} target="blank">{repositories.name}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default RenderDev;
