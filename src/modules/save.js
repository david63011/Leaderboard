/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle, import/extensions

import getScores from './getscores';
import { scores } from '../index';
import renderScores from './render';

async function saveScore() {
  const user = document.querySelector('.fullname').value;
  const score = document.querySelector('.thescore').value;
  const newScore = {
    user,
    score,
  };
  scores.push(newScore);
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
    method: 'POST',
    body: JSON.stringify({ user, score }),

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  getScores();
  renderScores();
}
export default saveScore;
