import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/MarvelService';

import './style/style.scss';

const marvelService = new MarvelService();
// marvelService.getAllCharacters().then(item => item.data.results.forEach(el => console.log(el.id)));
marvelService.getCharacter(1011095).then(item => console.log(item));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

