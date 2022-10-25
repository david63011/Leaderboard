/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import './styles/main.scss';
import saveScore from './modules/save';
import renderScores from './modules/render';

const form = document.querySelector('.form');
export const scores = JSON.parse(localStorage.getItem('scores')) || [];

/// first render
renderScores();

/// event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  saveScore();
  renderScores();
  localStorage.setItem('scores', JSON.stringify(scores));
});
