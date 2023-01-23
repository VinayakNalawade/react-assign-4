import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {card} = props

  return (
    <Link to={`/team-matches/${card.id}`} className="cardLinkContainer">
      <li className="cardItemContainer">
        <img className="cardTeamimg" alt={card.name} src={card.teamImageUrl} />
        <p className="cardTeamHeading">{card.name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
