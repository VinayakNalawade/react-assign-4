import './index.css'

const LatestMatch = props => {
  const {match} = props

  return (
    <div className="latestMatchContainer">
      <div className="latestMatchTopSection">
        <div className="latestMatchTopDetails">
          <p className="latestMatchTopHeading">{match.competingTeam}</p>
          <p className="latestMatchTopDate">{match.date}</p>
          <p className="latestMatchTopParas">{match.venue}</p>
          <p className="latestMatchTopParas">{match.result}</p>
        </div>
        <img
          className="latestMatchTopimg"
          alt={`latest match ${match.competingTeam}`}
          src={match.competingTeamLogo}
        />
      </div>
      <div className="latestMatchBottom">
        <p className="latestMatchTopParas">First Innings</p>
        <p className="latestMatchTopAns">{match.firstInnings}</p>
        <p className="latestMatchTopParas">Second Innings</p>
        <p className="latestMatchTopAns">{match.secondInnings}</p>
        <p className="latestMatchTopParas">Man Of The Match</p>
        <p className="latestMatchTopAns">{match.manOfTheMatch}</p>
        <p className="latestMatchTopParas">Umpires</p>
        <p className="latestMatchTopAns">{match.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
