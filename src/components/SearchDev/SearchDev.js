import React from 'react';

import './style.css';

const SearchDev = (props) => {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <h3>Pesquisar por Desenvolvedor</h3>
          <input placeholder={props.namePlaceHolderUser} onChange={props.changeDev} />
          <button onClick={props.loadDev}>Buscar Dev</button>
        </div>
      </header>
    </div>
  );
};

export default SearchDev;
