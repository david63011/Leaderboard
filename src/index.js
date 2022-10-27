/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import './styles/main.scss';
import saveScore from './modules/save';
import getScores from './modules/getscores';

const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh-button');
export const scores = [];
/// first render
getScores();
/// event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  saveScore();
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getScores();
});
