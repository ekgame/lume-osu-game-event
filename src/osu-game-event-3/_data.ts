import scores from "./score_data.json" assert { type: "json" };

export default {
  totalScores: scores.totalScores.sort((a,b) => b.score - a.score),
  beatmapScores: scores.beatmapScores
    // .sort((a,b) => b.scores.length - a.scores.length)
    .map(game => ({
      ...game,
      scores: game.scores.sort((a,b) => b.score - a.score),
    })),
};