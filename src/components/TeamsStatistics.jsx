export function TeamStatistics({ statistic }) {
  return (
    <article className="statistics-article">
      <h2>
        Games: <span>{statistic.games}</span>
      </h2>
      <h2>
        Points: <span>{statistic.points}</span>
      </h2>
      <h2>
        Fast Break Points: <span>{statistic.fastBreakPoints}</span>
      </h2>
      <h2>
        Points In Paint: <span>{statistic.pointsInPaint}</span>
      </h2>
      <h2>
        Biggest Lead: <span>{statistic.biggestLead}</span>
      </h2>
      <h2>
        Second Chance Points: <span>{statistic.secondChancePoints}</span>
      </h2>
      <h2>
        Field Goals Made: <span>{statistic.fgm}</span>
      </h2>
      <h2>
        Field Goal Percentage: <span>{statistic.fgp}%</span>
      </h2>
      <h2>
        Assists: <span>{statistic.assists}</span>
      </h2>
      <h2>
        Steals: <span>{statistic.steals}</span>
      </h2>
      <h2>
        Turnovers: <span>{statistic.turnovers}</span>
      </h2>
      <h2>
        Blocks: <span>{statistic.blocks}</span>
      </h2>
    </article>
  );
}
