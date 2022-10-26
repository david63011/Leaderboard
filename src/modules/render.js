function renderScores(scores) {
  const scoreList = document.querySelector('.result-list');
  scoreList.innerHTML = '';
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${score.user} : ${score.score}`;
    scoreList.appendChild(li);
  });
}

export default renderScores;
