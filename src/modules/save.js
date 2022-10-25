/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-cycle, import/extensions
import { scores } from '../index';
/// function to save the scores
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
