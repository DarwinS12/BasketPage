

export function StandingsInfo ({standing})  {
  return (
    <li className="li-list" >
            <article>
              <img src={standing.team.logo} alt="team logo" width={100} />
              <h2>
                Rank: <span>{standing.conference.rank}</span>
              </h2>
              <section className="section-info">
                <h4>
                  Win: <span>{standing.conference.win}</span>
                </h4>
                <h4>
                  Loss: <span>{standing.conference.loss}</span>
                </h4>
              </section>
              <section className="section-info">
                <h5>
                  W at home: <span>{standing.win.home}</span>
                </h5>
                <h5>
                  W away: <span>{standing.win.away}</span>
                </h5>
                <h5>
                  W total: <span>{standing.win.total}</span>
                </h5>
                <h5>
                  W %: <span>{standing.win.percentage}</span>
                </h5>
              </section>
              <section className="section-info">
                <h5>
                  Loss at home: <span>{standing.loss.home}</span>
                </h5>
                <h5>
                  Loss away: <span>{standing.loss.away}</span>
                </h5>
                <h5>
                  Loss total: <span>{standing.loss.total}</span>
                </h5>
                <h5>
                  Loss %: <span>{standing.loss.percentage}</span>
                </h5>
              </section>
            </article>
          </li>
  )
}
