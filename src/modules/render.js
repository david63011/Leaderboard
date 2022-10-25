/* eslint-disable import/no-cycle */
import { scores } from '../index';

function renderScores() {
  const scoreList = document.querySelector('.result-list');
  scoreList.innerHTML = '';
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${score.name} : ${score.score}`;
    scoreList.appendChild(li);
  });
  localStorage.setItem('scores', JSON.stringify(scores));
}

export default renderScores;
