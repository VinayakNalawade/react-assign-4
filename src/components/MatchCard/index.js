import './index.css'

const MatchCard = props => {
  const {match} = props

  return (
    <li className="matchCardContainer">
      <img
        className="matchCardimg"
        alt={`competing team ${match.competingTeam}`}
        src={match.competingTeamLogo}
      />
      <p className="matchCardHeading">{match.competingTeam}</p>
      <p className="matchCardPara">{match.result}</p>
      <p className={`${match.matchStatus}`}>{match.matchStatus}</p>
    </li>
  )
}

export default MatchCard
