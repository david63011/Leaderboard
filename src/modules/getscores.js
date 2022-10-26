import renderScores from './render';

async function getScores() {
  const savedScores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
  const recievedScores = await fetch(savedScores);
  const api = await recievedScores.json();
  const scores = api.result;
  renderScores(scores);
}

export default getScores;
