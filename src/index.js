/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
import './styles/main.scss';
import saveScore from './modules/save.js';
import { renderScores } from './modules/render.js';

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
