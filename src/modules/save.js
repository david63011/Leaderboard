// eslint-disable-next-line import/no-cycle, import/extensions
import { scores } from '../index';

function saveScore() {
  const name = document.querySelector('.fullname').value;
  const score = document.querySelector('.thescore').value;
  const newScore = {
    name,
    score,
  };
  scores.push(newScore);
  localStorage.setItem('scores', JSON.stringify(scores));
}

export default saveScore;
